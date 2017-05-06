const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      isAsync: true,
      validator: validator.isEmail
      },
      message: '{value} is not a valid eamil'
    },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function(){
  var user = this;
  //
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email'])
}

UserSchema.methods.generateAuthToken = function(){
  var user = this;
  var access = 'auth';
  //
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'asd123').toString();

  // jwt sign method's params?
  user.tokens.push({access, token});

  return user.save().then(() => {

    return token;
  });
};

UserSchema.statics.findByToken = function(token){
  var User = this;
  var decoded;


  try{
    decoded = jwt.verify(token, 'asd123');
    console.log('done verified');
  }catch(e){
    // console.log('token not valid');

    return Promise.reject(e);
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })

}


var User = mongoose.model('User', UserSchema);

module.exports = {
  User
}
