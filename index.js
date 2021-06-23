/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://sg-ants-server.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

const store = configureStore();

class SG extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => SG);
