const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const serverPort = 4000

app.use( '/graphql',
  graphqlHTTP({
    graphiql: true
  })
);

app.listen(serverPort, () => { console.log(`Server is listening on port ${serverPort}`)});
