const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  category: {
    type: "string",
  },
  type: {
    type: "string",
  },
  difficulty: {
    type: "string",
  },
  question: {
    type: "string",
  },
  correct_answer: {
    type: "string",
  },
  incorrect_answers: {
    type: "array",
    items: [
      {
        type: "string",
      },
      {
        type: "string",
      },
      {
        type: "string",
      },
    ],
  },
});

module.exports = mongoose.model("Quiz", quizSchema);

// const mongoose = require("mongoose");
// const quizSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     // required: true,
//     unique: true,
//   },
//   words: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Quiz", quizSchema);
