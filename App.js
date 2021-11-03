import React, { Component } from 'react';

import Feed from './Feed';
import Contact from './Contact';
import Custom from './Custom';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <NavigationContainer>

          <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
             options={{headerShown: false}} 
             name="Feed" 
             component={Feed} />

            <Stack.Screen 
            options={{
                title: 'Developer Contact Panel',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
            }name="Contact" 
            component={Contact} />


            <Stack.Screen 
              options={{
                title: 'Özel Premium Teklifi'
              }} 
              name="Custom" 
              component={Custom} />
          </Stack.Navigator>

        </NavigationContainer>
    )
  }
  }




export default App;
