import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoute from "./routes/contactroute";
import ticketRoute from "./routes/ticketroute";
import authRoute from "./routes/authroute"
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://cricket-website-tan.vercel.app"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api", contactRoute);
app.use("/booking", ticketRoute);
app.use("/auth",authRoute)
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Mongo url is not defined");
  process.exit(1);
}
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Connected ");
  })
  .catch((err) => console.log(err,"Failed to connect to db")) ;
app.listen(port, () => console.log(`Server is running on port ${port}`))
