import React, {Component} from 'react';
import AuthForm from './AuthForm.js';
import mutation from '../mutations/Login.js';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser.js';

class LoginForm extends Component{

  constructor(props){
    super(props);

    this.state = {errors: []};
  }

  //通过属性把email和密码传递给mutatio
  onSubmit({email,password}){
    //我们们写的mutation 都会返回一个promise
    this.props.mutate({
      variables: {
        email,password,
        //登陆之后要重新渲染组件，比如login之后要显示Logout
        refetchQueries:[{query}]
      }
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({errors});
    });
  }

  render(){
    return(
      <div>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm);
