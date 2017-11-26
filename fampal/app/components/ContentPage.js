// FamPal v1.0
// content page

import React, { Component } from 'react';
import {Button, Text, View, Image} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import {LoginPage} from './LoginPage';
import { StackNavigator } from 'react-navigation';


export default class ContentPage extends Component {
    static navigationOptions = {
        title: 'ContentScreen'
    };

    render(){
        return(
            <View>
                <Button style={styles.membersButtonStyle}
                    title="Members"
                    color="coral"
                />
                <ResponsiveImage style={styles.placeholderStyle}
                    source={require('../images/placeholder.png')}
                    initWidth="400" 
                    initHeight="600"
                />
        
            </View>       
        );
    }

}

const styles = {
    membersButtonStyle:{
        marginTop: 30,
        flex: 1, 
        flexDirection: 'row',
    },
    
    placeholderStyle:{
        justifyContent: 'center'
    }

};