import Ticket from "../models/ticketmodel";
 import { Request,Response } from "express";
export const ticket =async(req:Request,res:Response)=>{
try {
    const {name,email,match,date,seat,tickets}=req.body
    console.log(req.body)
 
    const newticket=new Ticket({
        name,
        email,
        match,
        tickets,
        date,
        seat,
    })
    const saveticket=await newticket.save()
    res.status(200).json({
        message:"Ticket booked successfully",
        newticket
    })
} catch (error) {
    console.log("Error booking ticket",error)
    res.status(500).json({
        message:"Error in booking ticket ",
        error
    })
}
}