import React, { Component } from "react";
import {
    View,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { PricingCard } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/women/33.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/men/18.jpg',
      subtitle: 'Vice Chairman'
    },
    {
        name: 'Annie Barie',
        avatar_url: 'https://randomuser.me/api/portraits/women/9.jpg',
        subtitle: 'Copywriter'
      },
      {
        name: 'Alan Dick',
        avatar_url: 'https://randomuser.me/api/portraits/men/19.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Luna Bollish',
        avatar_url: 'https://randomuser.me/api/portraits/women/34.jpg',
        subtitle: 'Influencer'
      },
      {
        name: 'Michael Toope',
        avatar_url: 'https://randomuser.me/api/portraits/men/20.jpg',
        subtitle: 'Boxer'
      },{
        name: 'Marry Jane',
        avatar_url: 'https://randomuser.me/api/portraits/women/35.jpg',
        subtitle: 'Actress'
      },
      {
        name: 'Barry Ducklarry',
        avatar_url: 'https://randomuser.me/api/portraits/men/21.jpg',
        subtitle: 'e-Sport Gamer'
      }
  ];

class Custom extends Component
{
    constructor(props){
        super(props);
    
        this.state = {
            processOnTheAction: false
        }
    }

    render(){
        return(
            <ScrollView>
                <PricingCard onButtonPress={() => this.setState({processOnTheAction: true})}
                    color="#4f9deb"
                    title="Free"
                    price="$0"
                    info={['1 User', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED' }}
                />
                { this.state.processOnTheAction ? <ActivityIndicator style={{marginBottom: 20}} size="large" color="0000ff" />:null}
                <View>
                {
                    list.map((l, i) => (
                    <TouchableOpacity key={i}>
                        <ListItem key={i} bottomDivider>
                            <Avatar source={{uri: l.avatar_url}} />
                            <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    </TouchableOpacity>
                    ))
                }
                </View>
            </ScrollView>
        )
    }
}

export default Custom;