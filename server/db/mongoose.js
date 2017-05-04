
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed:{
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// })
//
// // var newTodo = new Todo({
// //   text: 'Cook Dinner'
// // });
// //
// // newTodo.save().then(result => {
// //   console.log(result);
// // }).catch(e => {
// //   console.log(e);
// // });
//
// // var otherTodo = new Todo({
// //   text: 'Edit assignment'
// // });
// //
// // otherTodo.save().then(doc => {console.log(JSON.stringify(doc, undefined, 2));}).catch(
// //   e => {console.log(e)}
// // )
//
// var User = mongoose.model('User', {
//   email:{
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1
//   }
// })
//
// var user = new User({
//   email: '123@qq.com'
// })
//
// user.save().then(doc => {console.log(doc);}).catch(err => {
//   console.log('unable to save',err);
// })


module.exports = {
  mongoose
}
