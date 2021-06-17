const graphql = require("graphql");
const _ = require("lodash");
const { GraphQLObjectType , GraphQLString , GraphQLInt , GraphQLSchema} = graphql;

const users = [
    {"id":"1", "firstName":"Burnaby", "age":24},
    {"id":"2", "firstName":"Caron", "age":28},
    {"id":"3", "firstName":"Hulda", "age":30},
    {"id":"4", "firstName":"Myrna", "age":40}
]

const UserType = new GraphQLObjectType({
    name:"User",
    fields:{
        id:{type: GraphQLString},
        firstName:{type: GraphQLString},
        age:{type: GraphQLInt},
        qualification:{type:GraphQLString},
        marriedTo:{type:GraphQLString}
        
    }
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            args:{id:{type:GraphQLString}},
            resolve(parentvalue, args){
                return _.find(users , {id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})