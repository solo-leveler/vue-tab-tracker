const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body);         
            res.status(200).send(
                user.toJSON()
            )
        } catch (error) {
            //user or email already exists
            res.status(400).send({
                error : 'This email account is already in use'
            })
        }
      }
}