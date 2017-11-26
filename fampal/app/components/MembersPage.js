// FamPal v1.0
// content page

import React, { Component } from 'react';
import {Button, Text, View, Image} from 'react-native';

export default class ContentPage extends Component {
    static navigationOptions = {
        title: 'MembersScreen'
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.membersButtonStyle}>
                <Button 
                    onPress={() =>
                        navigate('Content', {})
                    }
                    title="Dad"
                    color="coral"
                />
                <Button 
                    onPress={() =>
                        navigate('Content', {})
                    }
                    title="Mom"
                    color="coral"
                />
                <Button 
                    onPress={() =>
                        navigate('Content', {})
                    }
                    title="Brother"
                    color="coral"
                />
                <Button 
                    onPress={() =>
                        navigate('Content', {})
                    }
                    title="Sister"
                    color="coral"
                />
            
            </View>
        );
    }
}

const styles = {
    membersButtonStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'

    }
}