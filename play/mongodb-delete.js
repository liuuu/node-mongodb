
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to db');
  }
  console.log('connected to the mongodb');
  // delete the all matches
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // // delete the first one match the critier
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
    console.log(result);
  })

})
