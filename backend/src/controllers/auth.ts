import { Request, Response } from "express";
import User, { IUser } from "../models/authmodel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// LOGIN CONTROLLER
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Logged in successfully",
      token,
      user: { id: user._id, email: user.email, name: user.name },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// REGISTER CONTROLLER
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, confirmpassword } = req.body;
    if (!name || !email || !password || !confirmpassword) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    if (password != confirmpassword) {
      res.status(400).json({ message: "Password does not match " });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: newUser._id, email: newUser.email, name: newUser.name },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: "Failed to register" });
  }
};
