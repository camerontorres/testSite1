const Products = require('../models/product')


module.exports = {
    getProducts: (req, res) => {
      res.render("products.ejs");
    },
    getProductPage: async (req, res) => {
      try{
        var collection = db.collection('products');
      let product = Products.findById({_id:'6410dd66f8e32e4f83489b2a'});
      res.render("productPage.ejs",{product: product});
    } catch (err) {
      console.log(err);
    }}
  }
  