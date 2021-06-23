import React, {useEffect, useState} from 'react';
import {AuthRouter, MainRouter} from './src/utils/router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

const App = ({isLogged}) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      console.log('Value: ', value);
      if (value !== null) {
        // value previously stored
        setToken(true);
      }
    } catch (e) {
      // error reading value
      setToken(false);
    }
  };

  return isLogged || token ? <MainRouter /> : <AuthRouter />;
};

const mapStateToProps = (state, props) => {
  return {
    isLogged: state.authReducer.isLogged,
  };
};
export default connect(mapStateToProps)(App);
