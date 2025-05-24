import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import contactRoute from "./routes/contactroute"
import ticketRoute from "./routes/ticketroute"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Mongo url i not defined");
  process.exit(1);
}

app.use("/api",contactRoute)
app.use("/booking",ticketRoute)


mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err) => console.log(err));
