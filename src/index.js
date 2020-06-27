import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import Routes from './routes';

export default function App(){
    return(
        <>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
            <Routes/>
        </>
    ); 
}

