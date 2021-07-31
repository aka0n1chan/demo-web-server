const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))
app.post("/", function (req, res) {
  if (req.body.answer === '2') {
    res.redirect('correct.html');
  } else {
    res.redirect('incorrect.html');
  }
})

app.get("/about", function (req, res) {
  res.send("Aboutページ");
  console.log("Aboutページ");
})

app.listen(3000, function () {
  console.log("Running!!!")
})