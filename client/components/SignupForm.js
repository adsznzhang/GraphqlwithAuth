import React, {Component} from 'react';
import AuthForm from './AuthForm.js';
import mutation from '../mutations/Signup.js';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser.js';
import {hashHistory} from 'react-router';

class SignupFrom extends Component{
  constructor(props){
    super(props);

    this.state = {errors:[]};
  }

  componentWillUpdate(nextProps){
    if(nextProps.data.user && !this.props.data.user){
      hashHistory.push('/dashboard');
    }
  }

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

export default graphql(query)( graphql(mutation) (SignupFrom))
