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

const storyContent = {
    title: 'Realstory',
    cover: 'https://realstory.ugurcengiz.com/media/img/la_hw.jpg',
    content: `Hoşgeldin. Günümüzde hikaye kelimesi ve kavramı ne kadar da değişti, değil mi? "Hikaye" kelimesini kullanırken öykü, yaşanmışlıklar aklımıza gelirdi. Şimdilerde sanal sosyal uygulamalardaki kıssa paylaşımlar aklımıza geliyor. Hikaye kelimesinin sözlük anlamını dijital ortamda yeniden deneyimlemek ister misin? Ortalama 1-3 dakika okuma süreli, seni anlık başka alemlere götürecek hikayeler... 
    
    O halde Sihirli butona şans vermeye ne dersin?`
}

class Feed extends Component{

    constructor(props){
        super(props);

        //StateLine
        this.state = {
            storyIsLoaded: true,
            activeStoryData: storyContent,
            readedStoriesIds: []
        };
    }

    //Toggle StoryIsLoaded State
    toggleStoryLoadingState(){
        this.setState({
            storyIsLoaded: !this.state.storyIsLoaded
        });

        const that = this;

        setTimeout(() => {
            fetch('https://realstory.ugurcengiz.com/api/random', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                    readedStoriesIds: that.state.readedStoriesIds
                }) // body data type must match "Content-Type" header
              })
                .then((response) => response.json())
                .then((res) => {
                    that.setState({
                        storyIsLoaded: !that.state.storyIsLoaded,
                        activeStoryData: {
                            title: res.title,
                            cover: res.cover,
                            content: res.content,
                        }
                    });

                    that.setState({
                        readedStoriesIds: that.state.readedStoriesIds.concat([res.id])
                    });

                }).catch(function(error){
                console.log(error);
            })
            console.log([... new Set(that.state.readedStoriesIds)]);
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
