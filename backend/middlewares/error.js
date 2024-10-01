import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
    let error ={
        statusCode: err?.statusCode || 500,
        message: err?.message || "Internal Server Error",
    };

    // Handle Mongoose ID error
if(err.name === 'CastError'){
    const message = `Resource not found, Invalid: ${err?.path}`
    error = new ErrorHandler(message, 404);
}
// Handle Validation Error
if(err.name === 'ValidatorError'){
    const message = Object.values(err.errors)
    error = new ErrorHandler(message, 404);
}



if(process.env.NODE_ENV === "DEVELOPMENT"){
    res.status(error.statusCode).json({
        message: error.message,
        error: err,
        stack: err?.stack,
    })  
}

if(process.env.NODE_ENV === "PRODUCTION"){
    res.status(error.statusCode).json({
        message: error.message,
    })  
}
  
}