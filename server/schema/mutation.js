const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = require('./types/user_type.js');
const AuthService = require('../services/auth.js');


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
      //当resolve 里有promise的时候需要用retur来返回
      resolve(parentValue, {email, password}, req){
        return AuthService.signup({email, password, req});
      }
    },
    logout:{
      type: UserType,
      resolve(parentValue, args, req){
        const {user} = req;
        req.logout();
        return user;
      }
    },
    login:{
      type: UserType,
      args:{
        email: {type: GraphQLString},
        password:{type: GraphQLString}
      },
      resolve(parentValue, { email, password}, req){
        return AuthService.login({email, password, req});
      }
    }
  }
});

module.exports = mutation;
