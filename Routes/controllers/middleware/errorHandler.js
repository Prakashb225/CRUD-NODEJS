const errorHandler = (err,req,res,next)=>{
    const statusCode= res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400:
            res.json({Title:"Validation failed",
            message: err.message, 
            stackTrace: err.stack});
            break;
        case 404 :
            res.json({Title:"not found",
            message: err.message, 
            stackTrace:err.stack});
            
        case 401:
            res.json({Title:"Unauthorized",
            message: err.message, 
            stackTrace: err.stack});

        case 403 :
            res.json({Title:"Forbitten",
            message: err.message, 
            stackTrace: err.stack});

        case 500:
            res.json({Title:"server error",
            message: err.message, 
            stackTrace: err.stack});
        default:
            console.log("No Error Found");
            break;
    }
};

module.exports= errorHandler;