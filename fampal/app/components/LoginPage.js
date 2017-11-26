// FamPal v1.0
// login page

import React, { Component } from 'react';
import { TitledInput } from './TitledInput';
import { StackNavigator } from 'react-navigation';
import {ContentPage} from './ContentPage';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class LoginPage extends Component {
  static navigationOptions = {
    title: 'LoginScreen',
  };
  state = { email: '', password: '', error: '', loading: false };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <Text style={styles.titleText}>
          Fam Pal
        </Text>
          <TitledInput 
            label='Email Address'
            placeholder='you@domain.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          
          <TitledInput 
            label='Password'
            autoCorrect={false}
            placeholder='*******'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Button style={styles.buttonStyle}
            onPress={() =>
                navigate('Content', {})
            }
            title="Login"
            color="coral"
          />
          
        </View>
    );
  }

}

const styles = {
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20
  },

  buttonStyle: {

  }

};