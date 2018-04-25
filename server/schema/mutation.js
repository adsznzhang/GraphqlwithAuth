const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = require('./types/user_type.js');


const mutation = new GraphQLObjectType ({
  name: 'Mutation',
  fields:{
    signup:{
      //返回的是用户创建的用户
      type: UserType,
      //输入的是邮件和密码
      args:{
        email:{type: GraphQLString},
        password:{type: GraphQLString}
      },
      // request代表了来自expres的请求
      resolve(parentValue, args, request){
        
      }
    }
  }
});

module.exports = mutation;
