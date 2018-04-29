import React from 'react';
import ReactDOM from 'react-dom';
//apolloclient不知道react，它需要apolloprovider来粘合react
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, hashHistory, Route,IndexRoute} from 'react-router';
import App from './components/App.js'

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
