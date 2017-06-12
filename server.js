var express = require("express"),
    app = express(),
    mongoClient = require('mongodb').MongoClient
    foodinfoService = require("./services/foodinfoService");

app.use(express.static("/home/mintyacer/Documents/webProjects/foodCalculator/resources"));

app.get("services/foodinfo", foodInfoService(mongoConncection));

app.use(function (req, res, next) {
  res.status(404).send("404 FILE NOT FOUND");
});

app.listen(3443, function () {
  console.log("listening on port 3443");
});



