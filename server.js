var express = require("express"),
    app = express();

app.use(express.static("/home/mintyacer/Documents/webProjects/foodCalculator/resources"));

app.use(function (req, res, next) {
  res.status(404).send("404 FILE NOT FOUND");
});

app.listen(3443, function () {
  console.log("listening on port 3443");
});



