


//const DB_STRING = require('dotenv')
const { get } = require('jquery');

//const {MongoClient } = require('mongodb')
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
        

        
          const {id} = Products.findById(req.params.id)                         //finding product by ID
          .then( result =>{                                                     //result is the found document
            res.render("productPage.ejs",{product: result})                          //result will be referenced in EJS as product, :id is not required            
          
                                                                                       
        })   
        }catch (err) {
          console.log(err);}
      },catch (err) {
        console.log(err);}
    }
        //) //mongoCL
      
     //}catch (err) {console.log(err);} //try
     // }  //async



     /* getMale: (req, res) => {
        try{
          

          
          const product = db.collection('products').find().toArray()
          .then(result =>{
            let params = result.req.params.type 
           // const {type} = result.find(req.query.type) 
        res.render("products.ejs", {params: params}) });
      }  catch (err) {
        console.log(err);}}, */
            

          //var db = client.db('test')          //finds the database
          //const product = db.collection('products').find()   //finds document AND collection

//}//moduleEx









/*  ********* THROWN OUT CODE/ ONLY USE FOR REFERENCE *****************

       let mongo = MongoClient.connect(DB_STRING, { useUnifiedTopology: true },function (err,client) { //connects to database
           if (err) throw err;
           .then








           */