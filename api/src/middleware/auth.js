const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, 'linkedinclone')

    // Check 'decoded' in user service
  } catch (e) {
    return res.status(401).send({ error: 'Invalid token.' })
  }
}

module.exports = auth