'use strict';

const {sequelize, DataTypes} = require('./index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const users = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // set(value) {
    //   const hashed = bcrypt.hashSync(value, 5);
    //   this.setDataValue('password', hashed);
    // }
  },
  token: {
    type: DataTypes.VIRTUAL,
    get() {
      return jwt.sign({username: this.username, role: this.role}, SECRET)
    }
  },
  role: {
    type: DataTypes.ENUM('user', 'writer', 'editor', 'admin'),
    defaultValue: 'user'
  },
  capabilities: {
    type: DataTypes.VIRTUAL,
    get() {
      const acl = {
        user: ['read'],
        writer: ['read', 'create'],
        editor: ['read', 'create', 'update'],
        admin: ['read', 'create', 'update', 'delete']
      }
      return acl[this.role];
      // acl['admin']
    }
  }
});

users.beforeCreate(async user => {
  // console.log(user)
  const hashed = await bcrypt.hash(user.password, 5);
  user.password = hashed;
  // console.log(user)
})

users.basicChecker = async function(username, password) {
  const user = await users.findOne({where: {username}});

  const isValid = await bcrypt.compare(password, user.password);
  if(isValid) {
    return user;
  } else {
    throw new Error('User doesnt exists');
  }
}

users.bearerChecker = async function(token) {
  const parsedToken = jwt.verify(token, SECRET);
  // console.log(parsedToken)
  const user = await users.findOne({where: {username: parsedToken.username}});
  if(user.username) {
    return user;
  } else {
    throw new Error('Invalid Token');
  }
}

module.exports = users;