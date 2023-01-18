const router = require('express').Router();
// const sequelize = require('../database');
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
const helloservice = grpc.loadPackageDefinition(packageDefinition).user;

const client = new helloservice.HelloService(
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

});

router.post('/login', (req, res) => {

});

router.post('/logout', auth, (req, res) => {

});

router.get('/me', auth, (req, res) => {

});

module.exports = router