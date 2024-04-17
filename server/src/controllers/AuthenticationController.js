const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status(200).send(
        user.toJSON()
      )
    } catch (error) {
      // user or email already exists
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'The password information was incorrect'
        })
      }
      res.status(200).send(
        {user: user.toJSON()}
      )
    } catch (error) {
      // user or email already exists
      res.status(500).send({
        error: 'Error trying to login'
      })
    }
  }

}
