const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  create: (user, callback) => {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) throw err;
      db.query('INSERT INTO users SET ?', { ...user, password: hash }, callback);
    });
  },
  findByEmail: (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], callback);
  }
};

module.exports = User;
