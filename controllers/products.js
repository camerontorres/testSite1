


const { MongoClient } = require('mongodb');
const Products = require('../models/product')


module.exports = {
  
    getProducts: (req, res) => {
      res.render("products.ejs");
    },
    getProductPage: async (req, res) => {
      try{
        
       let mongo = MongoClient.connect(DB_STRING, { useUnifiedTopology: true },function (err,client) { //connects to database
          if (err) throw err;
         var db = client.db('test')                               //finds the database
           db.collection('products').findOne()                   //finds document AND collection
          .then( result =>{                                     //result is the found document
     
      res.render("productPage.ejs",{product: result,})        //result will be referenced in EJS as product
        })   
       })
      
      }catch (err) {
      console.log(err);
    }
  }  



}//mongod