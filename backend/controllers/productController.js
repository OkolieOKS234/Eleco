import catchAsyncErrors from "../middlewares/catchAsyncErrors.js"
import products from "../models/products.js"
import Product from "../models/products.js"
import APIFilters from "../utils/apiFilters.js"
import ErrorHandler from "../utils/errorHandler.js"
// Create a new product api/v1/products
 export const getProducts = async(req,res)=>{

const apiFilters = new APIFilters(Product, req.query).search()

let products = await apiFilters.query
let filteredProductsCount = products.length
    // get new product
res.status(200).json({
  filteredProductsCount, 
  products
})
}
// Create a new product api/v1/admin/products
export const newProduct = async(req,res)=>{
  const  product = await Product.create(req.body)

res.status(200).json({
    product
})

    }
// getting a single Product api/v1/admin/products/id

// I will wrap this in a Error handler in middlewares folder
export const getProductDetails = catchAsyncErrors (async (req,res, next)=>{
  const  product = await Product.findById(req?.params?.id)

if(!product){
 return next(new ErrorHandler("Product not found", 404))
}



res.status(200).json({
    product
})

    })
// Update a product detail

export const updateProduct = async(req,res)=>{
  const  product = await Product.findById(req?.params?.id)

if(!product){
  return res.status(404).json({
    error: "Product not found"
  });
}

product = await Product.findByIdAndUpdate(req?.params?.id, {new: true})

res.status(200).json({
    product
})

    }

// Delete product
export const deleteProduct = async(req,res)=>{
  const  product = await Product.findById(req?.params?.id)

if(!product){
  throw new Error()
  return res.status(404).json({
    error: "Product not found"
  });
}

await product.deleteOne()

res.status(200).json({
    message: "Product deleted"
})

    }

  

