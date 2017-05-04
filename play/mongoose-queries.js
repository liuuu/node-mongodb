//  from mongodb
const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose.js');
const { Todo } = require('../server/db/models/todo.js');
const { User } = require('../server/db/models/user.js');

var id = '5909d629d0b8d15478125109s';

// mongoose convert itself
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todos => {
//   console.log(todos);
// });

// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
//
// Todo.findById(id).then(todo => {
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('todobyid------', todo);
// }).catch(e => {
//   console.log(e);
// })


const ids = '5909dc65b58c7d27280a1b5c';
User.findById(ids)
  .then(user => {
    console.log('user:', user);
  })
