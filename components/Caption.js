import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

class Caption extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{backgroundColor: '#ddd', position:'absolute',bottom: 20, opacity: 0.5}}>
                    <Text style={{fontSize:20,color:'black',fontFamily:'Trebuchet MS',padding: 7}}>{this.props.title}</Text>
                </View>
        );
    }
}

export default Caption;