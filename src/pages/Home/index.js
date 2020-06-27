import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import {View, StyleSheet, Icon, Text, TextInput} from 'react-native';
import {Dropdown} from './dropdown';

export default function Home(){
  
  
  
  return (
        
           <View style={styles.container}>

                <View style={styles.main}>
                        <Text style={styles.title}>App Weather</Text>
                        <Text style={styles.description}>Seu app para consulta de dados climáticos</Text>
                </View>

                <View style={styles.footer}>                  

                    <Dropdown />
                                       
                </View>     

           </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
      },
    
      main: {
        flex: 1,
        justifyContent: 'center',
      },
    
      title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
      },
    
      description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
      },
    
      footer: {},
    
      select: {},
    
     
    
});
