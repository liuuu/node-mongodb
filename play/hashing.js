const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'q123abc');
console.log(token);

var decoded = jwt.verify(token, 'q123abc');
console.log(decoded);

// var message = 'wo7ddf';
// var hashed = SHA256(message).toString();
// console.log(hashed);
//
// var data = {
//   id: 4
// };
//
// va token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + ).toString())
// }
//
// var resultHash = SHA256(JSON.stringify)
