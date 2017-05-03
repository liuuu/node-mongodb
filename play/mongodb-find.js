
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to db');
  }
  console.log('connected to the mongodb');

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count', `${count}`);
    console.log(JSON.stringify(count, undefined, 2));
  }).catch((err) => console.log(err))

  // db.close();
});

// db.collection('Todos').find({_id: new ObjectID('590884f359441a6b6b1d7e4b')}).toArray().then((data) => {
//   console.log('Todos');
//   console.log(JSON.stringify(data, undefined, 2));
// }).catch((err) => console.log(err))
