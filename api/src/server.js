const server = require('express')();
const sequelize = require('./database');
const bodyParser = require('body-parser').json();

const STAGE = process.env.STAGE;

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');

sequelize.sync({force:true, alter:true}).then(() => {
  if (STAGE === 'dev') {
    console.log('Starting dev server.')
  } else {
    console.log('Starting test server.')
  }
})

server.use('/api/user', bodyParser, userRouter);
server.use('/api/post', bodyParser, postRouter);
server.use('/api/comment', bodyParser, commentRouter);

server.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/api');
})