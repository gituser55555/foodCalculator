module.exports = function (db) {
    
    return function (req, res, next) {  //The express middleware funtion to return

        db.collection("infoOnGivenFoods").find({foodName: req.query.foodName}).toArray(function (err, docs) {

            if (err) {

                res.send(JSON.stringify({}));

            }

            else {

                res.send(JSON.stringify(docs[0]));
            
            }

        });

    };

};
