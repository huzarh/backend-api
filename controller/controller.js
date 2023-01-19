const mongoose = require("mongoose");

const Quiz = require("../models/quiz");

const getquiz = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).send(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("getquiz func error !!!!! ");
  }
};
module.exports = getquiz;
