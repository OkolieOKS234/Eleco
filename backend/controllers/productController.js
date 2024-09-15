import products from "../models/products.js"
import Product from "../models/products.js"
// Create a new product api/v1/products
 export const getProducts = async(req,res)=>{
    // get new product
const products = await Product.find()

res.status(200).json({
   products,
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
export const getProductDetails = async(req,res)=>{
  const  product = await Product.findById(req?.params?.id)

if(!product){
  return res.status(404).json({
    error: "Product not found"
  });
}



res.status(200).json({
    product
})

    }
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
  return res.status(404).json({
    error: "Product not found"
  });
}

await product.deleteOne()

res.status(200).json({
    message: "Product deleted"
})

    }

  

