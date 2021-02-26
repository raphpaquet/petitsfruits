import express from 'express';
import Product from '../models/productModel';
import { getToken, isAdmin, isAuth } from '../utils'

const router = express.Router();

// /* GET LIST OF PRODUCTS */
// router.get("/", async (req, res) => {
//   const products = await Product.find({}); 
//   res.send(products);
// });

/* GET PRODUCT BY CATEGORY */
router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const products = await Product.find({ ...category });
  res.send(products);
});

/* GET PRODUCT BY ID */
router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

/* CREATE NEW PRODUCT */
router.post("/", isAuth, isAdmin, async(req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    countInStock: req.body.countInStock
  });
  const newProduct = await product.save();
  if(newProduct) {
    res.status(201).send({ msg: "New Product Created. ", data: newProduct })
  }
  return res.status(500).send({ msg: "Error in Creating Product. "})
})

/* UPDATE PRODUCT */
router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.description = req.body.description;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    const updatedProduct = await product.save();
    if(updatedProduct) {
      return res.status(200).send({ msg: "Product Updated", data: updatedProduct })
    }
  }
  return res.status(500).send({ msg: "Error in Updated Product. "})
});

/* DELETE PRODUCT */
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if(deletedProduct) {
    await deletedProduct.remove();
    res.send({ msg: "Product deleted"})
  } else {
    res.send("Error in Deletion.")
  }
})


export default router;