var {User} = require('../models/user');

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');
  // console.log();
  console.log('req.token:', token);
  console.log('in authenticate');


  User.findByToken(token).then(user => {

    if(!user){
      console.log('user not exist');
      return Promise.reject();
    }
    console.log('exist or not');
    req.user = user;
    req.token = token;
    next();

  }).catch(e => {
    res.status(401).send(e);
  });


}

module.exports = {
  authenticate
}
