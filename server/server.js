
const { mongoose } = require('./db/mongoose');
const { User } = require('./modules/user');
const { Todo } = require('./modules/todo');

const express = require('express');
const bodyParser = require('body-parser');

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



app.listen(3000, () => {
  console.log('start on port 3000');
});
