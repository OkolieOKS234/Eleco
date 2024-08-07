import express from "express"
import dotenv from "dotenv"
const app = express();
import productRoutes from "./routes/products.js"
import { connectDatabase } from "./config/dbConnect.js";

dotenv.config({path:"backend/config/config.env"})

// Connecting our Database
connectDatabase();



// Using all routes
app.use("/api/v1/", productRoutes) 


app.listen(process.env.PORT, ()=>{
    console.log(`Server has been started on ${process.env.PORT}`)
})