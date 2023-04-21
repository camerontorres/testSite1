const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now

router.get("/", productsController.getProducts);
router.put("/productpage/addWishlist/:id", productsController.addWishlist);


router.get("/productPage/:id", ensureAuth, productsController.getProductPage); 
//router.get("/products/:type", ensureAuth, productsController.getMale); 


module.exports = router;