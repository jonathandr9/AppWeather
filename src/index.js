import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import Home from './pages/Home';

export default function App(){
    return(
        <>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
            <Home/>
        </>
    ); 
}

