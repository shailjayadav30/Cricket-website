import { Request, Response } from "express";
import Contact from "../models/contactmodel";
export const contact = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, phonenumber, topic } = req.body;
    console.log(req.body);
    const newuser = new Contact({
      firstname,
      lastname,
      email,
      phonenumber,
      topic,
    });
    const saveduser = await newuser.save();
    res.status(201).json({
      message: "User saved successfully",
      saveduser,
    });
  } catch (error) {
    console.log("error saving user:",error)
    res.status(500).json({
        message:"Error saving user",
        error:error instanceof Error ? error.message : error
    });
  }
};
