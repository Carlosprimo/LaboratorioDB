var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("COVID_COLOMBIA");
    dbo.collection("Colombia_covid_dataset").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });