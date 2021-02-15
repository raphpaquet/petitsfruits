module.exports = (db) => {

  const getProducts = () => {
    const query = {
        text: `SELECT * FROM products`
    }

    return db.query(query)
        .then(result => result.rows)
        .catch(err => err);
    }

    return {
      getProducts,
  };
};