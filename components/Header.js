import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <Image style={styles.applogo} source={require('./../src/img/realstorylogopng.png')} />
                <TouchableOpacity onPress={() => this.props.mainApp.toggleStoryLoadingState()} style={{position: 'absolute',right: 30}}>
                    <Image style={styles.logo} source={require('./../src/img/book.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        height: 50,
        fontSize: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    applogo:{
        height: 35,
        width:140,
        marginTop: 2
    },
    logo: {
        width:40,
        height:40
    }
})

export default Header;