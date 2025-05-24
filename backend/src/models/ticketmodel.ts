import mongoose from "mongoose";

const ticketschema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    email: { type: String, required: true, unique: true },
    match: {
      type: String,
      required: true,
      enum: ["T20", "ODI", "Test"],
    },
    date: {
      type: Date,
      required: true,
    },
    seat: {
      type: String,
      required: true,
      enum: ["VIP", "General", "Student", "Balcony"],
    },
    tickets: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketschema);

export default Ticket;
