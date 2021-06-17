//created a basic server for nodejs with express
const express = require("express");
// const expressGraphQl = require('express-graphql');  //it was destructured
const port = 4800;
//create the Object of express()
const app = express();
const {graphqlHTTP}  = require("express-graphql")
//we can either use the above one or below one for the replacement of expressGraphQl
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require("./schema/schema");

//start defining the routes
//we are using graphql as a middleware
//we are using localhost:4800/graphql in the browser url , we are referring graphql from below app.use
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(port, () => {
  console.log(`listening to the port ${port}`)
})