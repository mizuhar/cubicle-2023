const mongoose = require("mongoose");
const {MongooseError, Error} = require('mongoose');


exports.extractsErrorMessages = (error)=>{
  if(error instanceof MongooseError){
    return Object.values(error.errors).map(x => x.message)
  }else if(error instanceof Error){
    return  [error.message]
  }

  
}