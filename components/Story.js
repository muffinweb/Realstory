import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import Caption from './Caption';

class Story extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <Image style={styles.cover} source={{uri: this.props.storyData.cover}} />
                    <Caption title={this.props.storyData.title}/>
                </View>
                <View style={{width: '100%', justifyContent:'center',alignItems:'center',marginTop:20,paddingBottom: 60}}>
                    <View style={{backgroundColor:'', width:'90%'}}>
                        <Text style={{textAlign:'justify'}}>{this.props.storyData.content}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = {
    cover: {
        width:'100%',
        height:250,
    }
}


export default Story;