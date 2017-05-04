
const { mongoose } = require('./db/mongoose');
const { User } = require('./db/models/user');
const { Todo } = require('./db/models/todo');

const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then(doc => {
    res.send(doc);
  }).catch(error => {
    res.status(400).send(error);
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({todos});
  }).catch(e => {
    res.status(400).send(e);
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then(todo => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch(e => {
    res.status(404).send();
  })

  // Valid id using idValid

  // res.send(req.params);
})



app.listen(3000, () => {
  console.log('start on port 3000');
});

module.exports  = {
  app
}
