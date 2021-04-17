import React from 'react';

import {View,Text, Button, Alert, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class Contact extends React.Component
{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Ugur Cengiz @muffinwweb</Text>
                <Text>Volkan Coskun @8bitlikadam</Text>
                <Button style={styles.button} onPress={(e) => this.props.navigation.navigate("Feed")} title="Akisa Git"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        color:'red'
    }
});

export default Contact;
