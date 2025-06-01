 import mongoose from "mongoose";

 const subscriberschema=new mongoose.Schema({
    email:{type:String,required:true,unique:true}
 })

 const Subscriber=mongoose.model("Subscriber",subscriberschema)

 export default Subscriber