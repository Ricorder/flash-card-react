const User = require('../models/user')

async function signUp (req, res) {
  const { email, password } = req.body
  if (email && password) {
    const check = await User.findOne({email})
    if (!check) {
      const newUser = await User.create({
        email, password
      })
      return res.sendStatus(200)
    } else {
      return res.sendStatus(418)
    }
  }
};

// function signInRender (req, res) {
//   res.render('user/signin');
// };

// async function signIn (req, res) {
//   const { email, password } = req.body
//   if (email && password) {
//     const currentUser = await User.findOne({ email })
//     if (currentUser && (await bcrypt.compare(password, currentUser?.password))) {
//       req.session.userId = currentUser._id
//       req.session.email = currentUser.email
//       req.session.name = currentUser.name
//       req.session.role = currentUser.role
//       res.locals.name = req.session.name
//       return res.sendStatus(200)
//     }
//     return res.sendStatus(418)
//   }
// }

// async function signOut (req, res) {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.redirect('/')
//     }

//     res.clearCookie(req.app.get('cookieName'))
//     return res.redirect('/')
//   })
// }

module.exports = {
  signUp,
  // signInRender,
  // signIn,
  // signOut,
};