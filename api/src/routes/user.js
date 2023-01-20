const router = require('express').Router();
// const sequelize = require('../database');
const jwt = require('jsonwebtoken')
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = "../proto/user.proto";
const auth = require('../middleware/auth');

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
    if (!error) {
      // Create session token
      const token = jwt.sign({ id: r.userid.toString() }, 'linkedinclone', { expiresIn: '1 day' })
      
      // Return session token and userid
    }
    return res.send(error)
  })
});

router.post('/login', (req, res) => {

});

router.post('/logout', auth, (req, res) => {

});

router.get('/me', auth, (req, res) => {

});

module.exports = router