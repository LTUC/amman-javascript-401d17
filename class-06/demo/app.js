'use strict';

console.log('Test from inside the App file');

const base64 = require('base-64');
const bcrypt = require('bcrypt');

const password = '$#Grbsitgd!(*';

// waleed:$#Grbsitgd!(*

const encodedString = base64.encode(password);
console.log('The Encoded this string ', password , ' is: ', encodedString);

const decodedString = base64.decode(encodedString);
console.log('The decode for this string ', encodedString , ' is: ', decodedString);

// Brypt
console.log('----------------------- Bcrypt -----------------------')
const bcryptPassword = '123';
const salt = 5 // Complexity

async function encrypt(password, complexity) {
  const hashed = await bcrypt.hash(password, complexity);
  console.log(hashed)
  return hashed;
}

async function checkPassword() {
  await encrypt(bcryptPassword, salt)
  const hashedPass = '$2b$05$WT/WvDcRVzj/5XaFq2sgv.awpnEX7/2QxBhfGnjN0KfoIci9rX.c.';
  const isValid = await bcrypt.compare(bcryptPassword, hashedPass)

  console.log(isValid)
}

checkPassword();
// encrypt(bcryptPassword, salt)
// encrypt(bcryptPassword, 10)
// encrypt(bcryptPassword, salt)
// encrypt(bcryptPassword, salt)
// encrypt(bcryptPassword, salt)
// encrypt(bcryptPassword, salt)
// encrypt('waleed', salt)