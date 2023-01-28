const router = require('express').Router();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = "../proto/post.proto";
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
  "localhost:9001",
  grpc.credentials.createInsecure()
);

router.post('/create', auth, (req, res) => {
  const { postText } = req.body;

  client.CreatePost({ userId: req.userId, postText }, (error, r) => {
    console.log(r)
    if (!error) {
      return res.status(200).send({ postId: r.postId, body: r.body })
    }
    return res.send(error)
  })
});

router.get('/feed', auth, (req, res) => {
  client.GetPostFeed({ userId: req.userId }, (error, r) => {
    console.log(r)
    if (!error) {
      return res.status(200).send({ posts: r.posts, body: r.body })
    }
    return res.send(error)
  })
});

router.post('/like', auth, (req, res) => {

});

module.exports = router