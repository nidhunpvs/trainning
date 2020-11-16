var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/training";


var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myStudent = { name: "nidhun", address: "kl" };
    db.collection("students").insertOne(myStudent, function (err, result) {
        if (err) throw err;
        console.log("1 Recorded Inserted");
        db.close();
    });

});
  app.post('/getstundentdetails',function(req,res){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
            db.collection('students').find({ }, {}).toArray().then(result => {
                res.json({data:result})
                console.log(result,'result')
            })

    
    
    });
     
     
  })