import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  desc: String, // i use desc but it use title
  price: Number,
  category: String,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
