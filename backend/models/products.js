import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

name: {
type: String,
required: [true, "Please enter product name"],
maxLength: [200, "Length of characters must not exceed 200"]
},
price:{
    type: Number,
    required: [true, "Please enter price"],
    maxLength: [6, "Length of characters must not exceed 6"],
},
description:{
    type: String,
    required: [true, "Please enter the product description"],
    maxLength: [300, "Length should be 300"]
},
ratings:{
    type: Number,
    default: 0,
},
images:[
    {
        public_id:{
            type:String,
            required: true
        },
        url: String
    }
],
category:{
    type: String,
    required:[true, "Enter a category type"],
    enum:{
        values: [
            "Electronics",
            "Cameras",
            "Laptops",
            "Accesories",
            "Headphones",
            "Food",
            "Books",
            "Sports",
            "Outdoor",
            "Home"
        ],
        message: "Please select correct category"
    }
},

seller:{
    type: String,
    required: [true, "Please enter seller"]
},
stock:{
    type: Number,
    required: [true, "Please enter the stock remaining"]
},
numOfReviews:{
    type:Number,
    required:[true, "Please enter the number of reviews given"]
},
reviews:[
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            required:true,
        },
        comment: {
            type: String,
            required: true,
        }
    }
],
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
},
}, {timestamps:true})

export default mongoose.model("Product", productSchema)