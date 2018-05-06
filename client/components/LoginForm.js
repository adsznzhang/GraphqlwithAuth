import React, {Component} from 'react';
import AuthForm from './AuthForm.js';
import mutation from '../mutations/Login.js';
import { graphql } from 'react-apollo';

class LoginForm extends Component{

  //通过属性把email和密码传递给mutatio
  onSubmit({email,password}){
    this.props.mutate({
      variables: {
        email,password
      }
    })
  }

  render(){
    return(
      <div>
        <AuthForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm);
