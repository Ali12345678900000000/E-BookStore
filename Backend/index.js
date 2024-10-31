import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;

app.use(cors());
app.use(express.json());

// connect to mongodb
try {
  mongoose.connect(URI);
  console.log("connected to mongoDB");
} catch (error) {
  console.log("error: ", error);
}

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
