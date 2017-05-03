
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to db');
  }
  console.log('connected to the mongodb');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59088983b58c7d272809ec40')
  }, {
    $set: {
      completed: true
      }
    },{
      returnOriginal: false
    }).then(result => {
    console.log(result);
  })


})
