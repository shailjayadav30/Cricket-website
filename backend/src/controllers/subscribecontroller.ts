import Subscriber from "../models/subscriber"
import { Request,Response } from "express"
export  const subscribe =async(req:Request,res:Response)=>{
    const {email}=req.body
   
   try {
     if(!email || !email.includes("@")){
         res.status(400).json({message:"Invalid email"})
         return
    }
    const existing= await Subscriber.findOne({email})
    if(existing){
        res.status(409).json({
            message:"User Allready Subscribed"
        })
    }
    await Subscriber.create({email}) 
    res.status(201).json({message:"Subscribed successfully!"})
   } catch (error) {
     res.status(400).json({message:"Server error"})
   }
}