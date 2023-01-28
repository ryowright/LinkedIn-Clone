const jwt = require('jsonwebtoken');
const SessionToken = require('../models/SessionToken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, 'linkedinclone')

    const sessionToken = await SessionToken.findOne({
      where: {
        userId: decoded.id,
        token
      }
    })
    if (!token || !decoded || sessionToken === null) {
      req.token = null
      req.userId = null
    } else {
      req.token = token
      req.userId = decoded.id
    }
    next()
  } catch (e) {
    return res.status(401).send({ error: 'Invalid token.' })
  }
}

module.exports = auth