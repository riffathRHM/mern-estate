// create a error for enough strong password for signin thats like functions
export const errorHandler =(statusCode,message)=>{
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}