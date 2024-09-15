import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/products.js"


// Adding a large amount of data

const seedProducts = async () => {

try {
await mongoose.connect("mongodb://127.0.0.1:27017/eleco")

await Product.deleteMany()
console.log("Products are deleted")

await Product.insertMany(products)
console.log("products are added")
process.exit();

}
catch(error){
    console.log(error.message);
    process.exit();
}



}
seedProducts();