import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUser} from '../../redux/actions/authActions';

const AuthContainer = ({loginUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    loginUser();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Username'}
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        secureTextEntry
        placeholder={'Password'}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={onPressLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(AuthContainer);
