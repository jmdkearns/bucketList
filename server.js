var express = require('express');
var app     = express();
var path    = require('path');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require( 'body-parser' );
var ObjectID = mongodb.ObjectID;
app.use( bodyParser.json() );
app.use( express.static('client'));


var url = 'mongodb://localhost:27017/bucketList';

app.use(express.static('client/build'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

//INDEX
app.get('/bucketlist', function(req, res) {
  MongoClient.connect( url, function( err, db ) {
    var collection = db.collection( 'countries' )
      collection.find({}).toArray( function( err, docs ) {
      res.json( docs );
      db.close();
    })
  })
})

// // NEW
// app.get('/bucketlist/new', function(req, res) {
//   res.send("New country to bucketlist");
// });

// CREATE
app.post('/bucketlist', function(req, res) {

  MongoClient.connect( url, function( err, db ) {
     var collection = db.collection( 'countries' );
     collection.insert( req.body )
     res.status(200).end();
     db.close();
   })

});

// // SHOW
// app.get('/bucketlist/:id', function(req, res){
//   res.json(bucketlist[req.params.id-1]);
// })

// // EDIT
// app.get('/bucketlist/:id/edit', function(req, res) {
//   res.send("EDIT bucketlist route");
// });

// // UPDATE
// app.put('/bucketlist/:id', function(req, res) {
//   res.send("UPDATE bucketlist route");
// });

// DELETE
app.delete('/bucketlist/:id', function(req, res) {
  MongoClient.connect( url, function(err, db) {
     var collection = db.collection( 'countries' );

     collection.remove( { _id: new ObjectID(req.params.id) } );
     res.status(200).end();
     db.close();
   })
});

app.listen('3000', function(){
  console.log('The magic is all happening on port 3000');
  })