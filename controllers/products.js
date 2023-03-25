


const { MongoClient } = require('mongodb');
const Products = require('../models/product')


module.exports = {
  
    getProducts: (req, res) => {
      res.render("products.ejs");
    },
    getProductPage: async (req, res) => {
      try{
        
       let mongo = MongoClient.connect(DB_STRING, { useUnifiedTopology: true },function (err,client) {
          if (err) throw err;
         var db = client.db('test')
           db.collection('products').findOne()
          .then( result =>{
     
      res.render("productPage.ejs",{product: result,}) 
        })   
       })
      
      }catch (err) {
      console.log(err);
    }
  }  



}//mongod