const express = require('express');

//1
const hubsRouter = require('./hubs/hubs-router.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

//2
server.use('/api/hubs', hubsRouter)

const port = 5000;
server.listen(port, () => {
  console.log(`\n===  ⭐  API on Port ${port} ⭐   ===\n`);
});
