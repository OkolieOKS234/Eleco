import express from "express"
 import { deleteProduct, getProductDetails, getProducts, newProduct, updateProduct } from "../controllers/productController.js";
import products from "../models/products.js";


const router = express.Router();

router.route("/products").get(getProducts)
router.route("/admin/products").post(newProduct)

// get a particular product 
router.route("/products/:id").get(getProductDetails)
router.route("/products/:id").put(updateProduct)
router.route("/products/:id").delete(deleteProduct)


export default router