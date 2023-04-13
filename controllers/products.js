


const { get } = require('jquery');
const {MongoClient } = require('mongodb');
const { db } = require('../models/product');
const Products = require('../models/product')


//"mongodb+srv://admin:test123@cluster0.zt4r4al.mongodb.net/test" new string
//"mongodb+srv://admin:test123@cluster0.zt4r4al.mongodb.net/?retryWrites=true&w=majority" old string

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
        
       let mongo = MongoClient.connect({DB_STRING}, { useUnifiedTopology: true },function (err,client) { //connects to database
         if (err) throw err;
        
          const {id} = Products.findById(req.params.id)                         //finding product by ID
          .then( result =>{                                                     //result is the found document
            res.render("productPage.ejs",{product: result})                          //result will be referenced in EJS as product, :id is not required            
          
                                                                                       
        })   //.then
        }) //mongoCL
      
     }catch (err) {console.log(err);} //try
      }  //async



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

}//moduleEx