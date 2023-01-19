app.get("/quiz", (req, res) => {
  res.send(`
      <h1>Quiz</h1>
      <form action="/quiz" method="post">
        <label for="question">Question:</label><br>
        <input type="text" id="question" name="question"><br>
        <label for="answer1">Answer 1:</label><br>
        <input type="text" id="answer1" name="answer1"><br>
        <label for="answer2">Answer 2:</label><br>
        <input type="text" id="answer2" name="answer2"><br>
        <label for="answer3">Answer 3:</label><br>
        <input type="text" id="answer3" name="answer3"><br>
        <label for="correctAnswer">Correct Answer:</label><br>
        <input type="number" id="correctAnswer" name="correctAnswer"><br><br>
        <input type="submit" value="Submit">
      </form> 
    `);
});
