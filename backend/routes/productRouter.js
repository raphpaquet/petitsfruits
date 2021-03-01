import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import { getToken, isAdmin, isAuth } from '../utils';
import data from '../data.js'
import User from '../models/userModels'

const productRouter = express.Router();


productRouter.get('/', expressAsyncHandler(async (req,res) => {
  const category = req.query.category || '';
  const order = req.query.order || '';
  const name = req.query.name || '';
  const categoryFilter = category ? { category } : {};
  const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
  const products = await Product.find({
    ...categoryFilter,
    ...nameFilter
  })
  res.send({products})
}))


productRouter.get('/seed', expressAsyncHandler(async(req,res) => {
    const products = data.products.map((product) => ({
      ...product,
    }));
  const createdProducts = await Product.insertMany(products);
  res.send(createdProducts)
}))

/* GET PRODUCT BY CATEGORY */
productRouter.get('/categories', expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);

/* GET PRODUCT BY ID */
productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
}));

/* CREATE NEW PRODUCT */
productRouter.post('/', isAuth, isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: 'sample name ',
      image: '/images/p1.jpg',
      price: 0,
      category: 'sample category',
      brand: 'sample brand',
      countInStock: 0,
      description: 'sample description',
    });
    const createdProduct = await product.save();
    res.send({ message: 'Product Created', product: createdProduct });
  })
);

/* UPDATE PRODUCT */
productRouter.put('/:id', isAuth, isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.category = req.body.category;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      const updatedProduct = await product.save();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
/* DELETE PRODUCT */
productRouter.delete('/:id',isAuth,isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);


export default productRouter;
