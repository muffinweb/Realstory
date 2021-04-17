import React, {Component} from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    ActivityIndicator,
    ScrollView
} from 'react-native';


import Header from './components/Header';
import Story from './components/Story';

const covers = [
    'https://image.freepik.com/free-vector/autumn-landscape-cartoon-style-trees-clouds-earth-vector-illustration_114352-27.jpg',
    'https://image.freepik.com/free-vector/background-flat-autumn-landscape_23-2148240235.jpg',
    'https://img.freepik.com/free-vector/space-illustration-night-alien-fantasy-landscape_33099-1873.jpg?size=626&ext=jpg'
];

const storyContent = {
    title: 'Interstellar',
    cover: 'https://img.freepik.com/free-vector/space-illustration-night-alien-fantasy-landscape_33099-1873.jpg?size=626&ext=jpg',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie efficitur ullamcorper. Curabitur cursus pulvinar metus ut tincidunt. Integer quis vulputate turpis. Vivamus varius eget ex vitae posuere. Maecenas rutrum ipsum non arcu auctor maximus. Donec eleifend blandit ex in facilisis. Nam viverra nulla sed orci euismod, ac suscipit nisi laoreet.Fusce pretium neque non felis sollicitudin, sed interdum augue iaculis. Nullam porta pulvinar risus, eget ultrices dolor iaculis ut. Sed id suscipit justo. Donec vitae nulla mollis, egestas libero et, consectetur neque. In dapibus tincidunt augue ac sagittis. Nulla nec venenatis sapien. Praesent eget arcu lobortis, gravida arcu id, molestie`
}

class Feed extends Component{

    constructor(props){
        super(props);

        //StateLine
        this.state = {
            storyIsLoaded: true,
            activeStoryData: storyContent
        };
    }

    //Toggle StoryIsLoaded State
    toggleStoryLoadingState(){
        this.setState({
            storyIsLoaded: !this.state.storyIsLoaded
        });

        const that = this;

        setTimeout(() => {
            fetch('https://realstory.ugurcengiz.com/api/random')
                .then((response) => response.json())
                .then((res) => {
                    that.setState({
                        storyIsLoaded: !that.state.storyIsLoaded,
                        activeStoryData: {
                            title: res.title,
                            cover: res.cover,
                            content: res.content
                        }
                    })
                }).catch(function(error){
                console.log(error);
            })
        }, 1500);
    }


    render(){
        return(
            <View>
                <Header mainApp={this} />
                { this.state.storyIsLoaded ?
                    <Story storyData={this.state.activeStoryData}/>:
                    <ActivityIndicator size="large" color="#1976d2"/>
                }
            </View>
        )
    }
}



export default Feed;
