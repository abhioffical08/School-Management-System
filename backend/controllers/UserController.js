const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {
  register: (req, res) => {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    User.create(newUser, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(201).send({ message: 'User registered successfully!' });
    });
  },
  login: (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (err, users) => {
      if (err) res.status(500).send(err);
      if (users.length === 0) return res.status(404).send({ message: 'User not found' });

      const user = users[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) res.status(500).send(err);
        if (!isMatch) return res.status(400).send({ message: 'Incorrect password' });

        const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey', { expiresIn: '1h' });
        res.send({ token });
      });
    });
  }
};

module.exports = UserController;
