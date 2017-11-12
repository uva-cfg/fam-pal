import LoginPage from './app/components/LoginPage'; 

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'IKvT4qrHVIre5A',
        authDomain: 'fam-pal.firebaseapp.com',
        databaseURL: 'https://fam-pal.firebaseio.com',
        projectId: 'fam-pal',
        storageBucket: '',
        messagingSenderId: '404349439324'
    });
}
    render() {
        return (
            <LoginPage />
        );
    }
}

export default App;