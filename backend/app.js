import express from "express"
import dotenv from "dotenv"
const app = express();
import productRoutes from "./routes/products.js"
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/error.js"
// Handle Uncaught exceptions
process.on('uncaughtException', (err)=>{
    console.log(`ERROR: ${err}`);
    console.log("Shutting down due to uncaught exceptions");
    process.exit(1);
    
})

dotenv.config({path:"backend/config/config.env"})

// Connecting our Database
connectDatabase();

app.use(express.json())

// Using all routes
app.use("/api/v1/", productRoutes) 

//using Error middleware to handle all the errors
app.use(errorMiddleware);



app.listen(process.env.PORT, ()=>{
    console.log(`Server has been started on ${process.env.PORT}`)
})


// Handling Undefined  Promise rejections
process.on("unhandledRejection", (err)=>{
console.log(`ERROR: ${err}`);
console.log("Shutting down the server due to Undefined Promise rejections");
server.close(()=>{
    process.exit(1);
})


})