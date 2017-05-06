const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
//

const bcrypt = require('bcryptjs');
var password = '123asd';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// })

var hashedPassword = '$2a$10$A45J8JxDwNFDZ1pUbVJEF.JCMs8KheHLCwfX2Bi6O1kzxUu2mkHN6'
bcrypt.compare(password, hashedPassword, (err, result) => {
  console.log(result);
})
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'q123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, 'q123abc');
// console.log(decoded);

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
