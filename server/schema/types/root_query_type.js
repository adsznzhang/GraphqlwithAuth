const graphql = require('graphql');
const { GraphQLObjectType , GraphQLID} = graphql;
const UserType = require('./user_type.js');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
      type: UserType,
      resolve(parentValue,args,req){
          return req.user;
      }
  }
});

module.exports = RootQueryType;
