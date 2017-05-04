//  from mongodb
const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose.js');
const { Todo } = require('../server/db/models/todo.js');
const { User } = require('../server/db/models/user.js');

var id = '5909d629d0b8d15478125109s';

// Todo.remove({}).then(result => {
//   console.log(result);
// })

// Todo.findOneAndRemove()
Todo.findByIdAndRemove('590a991d22e6566698390eee').then(doc => {
  console.log(doc);
})
