
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to db');
  }
  console.log('connected to the mongodb');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('wrong:', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  //
  // db.collection('Users').insertOne({
  //   name: 'andrew',
  //   age: 30,
  //   location: 'dalian'
  // }, (err, result) => {
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
