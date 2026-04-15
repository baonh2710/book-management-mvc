const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render("index", { books: books });
  } catch (error) {
    console.log("Getting books failed:", error.message);
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    await Book.create({ title: title, author: author, year: year });
    console.log("Book added successfully");
    res.redirect("/");
  } catch (error) {
    console.log("Adding book failed:", error.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    console.log("Book deleted successfully");
    res.redirect("/");
  } catch (error) {
    console.log("Deleting book failed:", error.message);
  }
};

module.exports = { getAllBooks, addBook, deleteBook };
