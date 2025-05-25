import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstname: { type: String, required: true, minlength: 2, maxlength: 50 },
  lastname: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50 },
  phonenumber: { type: String, required: true, minlength: 2, maxlength: 10 },
  topic: { type: String, required: true, minlength: 2, maxlength: 50 },
}, { timestamps: true });

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
