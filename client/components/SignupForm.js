import React, {Component} from 'react';
import AuthForm from './AuthForm.js';
import mutation from '../mutations/Signup.js';
import { graphql } from 'react-apollo';

class SignupFrom extends Component{

  onSubmit({email, password}){
    this.props.mutate({
      variables: {
        email,
        password
      }
    });
  };


  render(){
    return(
      <div>
        <h3>Sign Up</h3>
        <AuthForm errors={[]} onSubmit={this.onSubmit.bind(this)}/>
      </div>

    )
  }
}

export default graphql(mutation) (SignupFrom);
