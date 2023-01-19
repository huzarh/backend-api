const mongoose = require("mongoose");
const Quiz = require("../models/quiz");

const postquiz = async (req, res) => {
  const quiz = req.body;
  const quiz1 = new Quiz(quiz);
  console.log("====>" + quiz);
  try {
    const newQuiz = await quiz1.save();
    res.status(201).json(newQuiz);
    console.log("amjilttai quiz");
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Creat quiz  error : ");
  }
};

// const book = await Book.create(req.body);

// res.status(200).json({
//   success: true,
//   data: book,
// });

module.exports = postquiz;
