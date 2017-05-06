const { ObjectID } = require('mongodb');
const { Todo } = require('../../models/todo');
const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');
const userId1 = new ObjectID();
const userId2 = new ObjectID();
const users = [{
  _id: userId1,
  email: '123@qq.com',
  password: '123asd',
  tokens:[{
    access: 'auth',
    token: jwt.sign({
      _id: userId1,
      access: 'auth'
    }, 'asd123').toString()
  }]
},{
  id: userId2,
  email: '3455@qq.com',
  password: 'password2'
}]

const todos =  [{
  _id: new ObjectID(),
  text: 'first test todo'
},{
  _id: new ObjectID(),
  text: 'second test todo',
  completed: true,
  completedAt: 3333
}];


const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());

}

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo])
  }).then(() => done());
}

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}
