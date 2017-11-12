// FamPal v10
// login page

import React, { Component } from 'react';
import firebase from 'firebase';
import { TitledInput } from './TitledInput';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class LoginPage extends Component {
  state = { email: '', password: '', error: '', loading: false };
  
  onLoginPress() {
    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => { this.setState({ error: '', loading: false }); })
        .catch(() => {
            //Login was not successful, let's create a new account
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => { this.setState({ error: '', loading: false }); })
                .catch(() => {
                    this.setState({ error: 'Authentication failed.', loading: false });
                });
        }); 
  }

  renderButtonOrSpinner() {
    if (this.state.loading) {
        return 'Loading';    
    }
    return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
  }
  render() {
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
            
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            {this.renderButtonOrSpinner()}
          </View>
      );
  }

}

const styles = {
  errorTextStyle: {
      color: '#E64A19',
      alignSelf: 'center',
      paddingTop: 10,
      paddingBottom: 10,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20
  }
};