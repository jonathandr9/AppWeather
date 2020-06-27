// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './pages/Home';
import Weather from './pages/Weather';

const AppStack = createStackNavigator();

const Routes = () =>{

    return(
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none" 
                screenOptions = {{
                    carStyle:{
                        backgroundColor: '#f0f0f5'//cor de fundo de todas as telas
                    }
                }}    
            >

                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Weather" component={Weather}/>               

            </AppStack.Navigator>
        </NavigationContainer>

    );
}

export default Routes;