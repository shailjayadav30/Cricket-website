// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors"
// import contactRoute from "./routes/contactroute"
// import ticketRoute from "./routes/ticketroute"
// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin:["http://localhost:5173","https://cricket-website-tan.vercel.app"],
//   credentials:true
// }))
// const port = process.env.PORT || 5000;
// const mongoUrl = process.env.MONGO_URL;

// if (!mongoUrl) {
//   console.error("Mongo url i not defined");
//   process.exit(1);
// }
// app.get("/",(req,res)=>{
//   res.send("hello")
// })
// app.use("/api",contactRoute)
// app.use("/booking",ticketRoute)



// mongoose
//   .connect(mongoUrl)
//   .then(() => {
//     app.listen(port, () => console.log(`Server is running on port ${port}`));
//   })
//   .catch((err) => console.log(err));



// src/index.ts
import express from "express";
import { connectDB } from "./db/db";
import contactRoute from "./routes/contactroute";
import ticketRoute from "./routes/ticketroute";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://cricket-website-tan.vercel.app"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from Cricket API");
});

app.use("/api", contactRoute);
app.use("/booking", ticketRoute);

const startServer = async () => {
  await connectDB(); // 🟢 DB connection
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
  });
};

startServer();
