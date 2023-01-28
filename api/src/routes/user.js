const router = require('express').Router();
// const sequelize = require('../database');
const jwt = require('jsonwebtoken')
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = "../proto/user.proto";
const auth = require('../middleware/auth');
const SessionToken = require('../models/SessionToken');

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const userservice = grpc.loadPackageDefinition(packageDefinition).user;

const client = new userservice.UserService(
  "localhost:9000",
  grpc.credentials.createInsecure()
);


router.post('/sayhello', (req, res) => {
  const { name } = req.body;
  
  client.SayHello({name}, (error, r) => {
    console.log(r)
    if (!error) {
      return res.send(r.body + "\n")
    }
    return res.send(error)
  });
});

router.post('/register', (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  client.Register({ email, password, firstName, lastName }, (error, r) => {
    console.log(r)
    try {
      if (!error) {
        // Create session token
        const token = jwt.sign({ id: r.userId.toString() }, 'linkedinclone', { expiresIn: '1 day' })
        SessionToken.create({ userId: r.userId, sessionToken: token })
  
        // Return session token and userid
        return res.status(200).send({ userId: r.userId, token, body: r.body })
      }
      return res.send(error)
    } catch(err) {
      return res.send(err)
    }
  })
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  client.Login({ email, password }, (error, r) => {
    try {
      if (!error) {
        // Create session token
        const token = jwt.sign({ id: r.userId.toString() }, 'linkedinclone', { expiresIn: '1 day' })
        SessionToken.create({ userId: r.userId, sessionToken: token })
      
        // Return session token and userid
        return res.status(200).send({ userId: r.userId, token, body: r.body })
      }
      return res.send(error)
    } catch(err) {
      return res.send(err)
    }
  })
});

router.post('/logout', auth, (req, res) => {
  if (!req.token || !req.userId) {
    return res.status(401).send({ error: 'User is unauthenticated.' })
  }

  client.Logout({ userId: req.userId }, (error, r) => {
    try {
      if (!error) {
        // Deletes all of a user's session tokens
        SessionToken.destroy({
          where: {
            userId: req.userId,
            sessionToken: req.token
          }
        })
        return res.send({ body: r.body })
      }
      return res.send(error)
    } catch(err) {
      return res.send(err)
    }
  })
});

router.get('/me', auth, (req, res) => {
  if (!req.token || !req.userId) {
    return res.status(401).send({ error: 'User is unauthenticated.' })
  }

  client.Me({ userId: req.userId }, (error, r) => {
    try {
      if (!error) {
        return res.send(r)
      }
      return res.send(error)
    } catch(err) {
      return res.send(err)
    }
  })
});

router.get('/user-profile', auth, (req, res) => {
  const { requestedUserId } = req.body;
  
  if (!req.token || !req.userId) {
    return res.status(401).send({ error: 'User is unauthenticated.' })
  }

  client.GetUserProfile({ requestedUserId }, (error, r) => {
    try {
      if (!error) {
        return res.send(r)
      }
      return res.send(error)
    } catch(err) {
      return res.send(err)
    }
  })
})

// TODO -- Add User Network Functionality

// router.post('/connect', auth, (req, res) => {
//   const { userId1, userId2 } = req.body;

//   client.Connect({ userId1, userId2 }, (error, r) => {
//     try {
//       if (!error) {
//         return res.send({ userId: r.userId, body: r.body })
//       }
//       return res.send(error)
//     } catch(err) {
//       return res.send(err)
//     }
//   })
// });

module.exports = router