


const { MongoClient } = require('mongodb');
const { db } = require('../models/product');
const Products = require('../models/product')


module.exports = {
  
    getProducts: (req, res) => {
      try{
        const product = db.collection('products').find().toArray()
        .then(result =>{
      res.render("products.ejs", {product: result}) });
    }  catch (err) {
      console.log(err);}},



    getProductPage: async (req, res) => {
      try{
        
       let mongo = MongoClient.connect(DB_STRING, { useUnifiedTopology: true },function (err,client) { //connects to database
         if (err) throw err;
        
          const {id} = Products.findById(req.params.id)                
          .then( result =>{                                            //result is the found document
            res.send('id:' + req.params.id)
      res.render("productPage",{product: result})                                             //result will be referenced in EJS as product
        })   
        }) //mongoCL
      
     }catch (err) {
      console.log(err);}
      }  




          //var db = client.db('test')          //finds the database
          //const product = db.collection('products').find()   //finds document AND collection

}//moduleEx