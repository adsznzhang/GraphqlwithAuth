import React from 'react';
import ReactDOM from 'react-dom';
//apolloclient不知道react，它需要apolloprovider来粘合react
import ApolloClient,{createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, hashHistory, Route,IndexRoute} from 'react-router';
import App from './components/App.js'
import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';
import Dashboard from './components/Dashboard.js';
import requireAuth from './components/requireAuth.js';

//让浏览器到后端的请求默认带cookies
const networkInterface = createNetworkInterface({
  uri:'/graphql',
  opts:{
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm}/>
          <Route path="signup" component={SignupForm}/>
          <Route path="dashboard" component={requireAuth(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
