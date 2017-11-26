import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import Label from './label';
import Button from './button';

export default class SignupPage extends Component {
  static navigationOptions = {
    title: 'SignupScreen',
  };

  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      confirmPass: '',
      error: ''
    };
  }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.labelContainer}>
          <Label text="First Name" />
          <TextInput
            style={styles.textInput}
            value={this.state.first}
            onChangeText={first => this.setState({ first })}
          />
        </View>
        <View style={styles.labelContainer}>
          <Label text="Last Name" />
          <TextInput
            style={styles.textInput}
            value={this.state.last}
            onChangeText={last => this.setState({ last })}
          />
        </View>
        <View style={styles.labelContainer}>
          <Label text="Email" />
          <TextInput
            style={styles.textInput}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={styles.labelContainer}>
          <Label text="Password" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.labelContainer}>
          <Label text="Confirm Password" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            value={this.state.confirmPass}
            onChangeText={confirmPass => this.setState({ confirmPass })}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.labelContainer}>
            <Button
              label="Sign Up"
              styles={{
                button: styles.primaryButton,
                label: styles.buttonWhiteText
              }}
              onPress={() =>
                navigate('Content', {})
              }
            />
          </View>
          <View style={styles.labelContainer}>
            <Button
              label="Cancel"
              styles={{ label: styles.buttonBlackText }}
              onPress={() =>
                navigate('Login', {})
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF'
  },
  labelContainer: {
    marginBottom: 20
  },
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  textInput: {
    height: 30,
    fontSize: 24,
    backgroundColor: '#FFF'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF'
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#34A853'
  },
  footer: {
    marginTop: 50
  }
});
