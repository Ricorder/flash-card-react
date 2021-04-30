const userRouter = require('express').Router();

const {
  signUp,
  // signIn,
  // signOut,
} = require('../controllers/userController');

userRouter.route('/signup')
  .post(signUp)

// userRouter.route('/signin')
//   .post(signIn)

// userRouter.route('/signout')
//   .get(signOut)

  module.exports = userRouter
