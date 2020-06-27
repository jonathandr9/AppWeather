import React, {useEffect, useState}from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios' ;
import {useRoute} from '@react-navigation/native';

export default function Weather(){
    
    const route = useRoute();  
    const { coord,
            weather,
            base, 
            main, 
            visibility, 
            wind, 
            clouds, 
            dt, 
            sys,
            timezone,
            id,
            name,
            cod} = route.params;
          

    return (        

        <View style={styles.container}>
            
            <View style={styles.main}>
                {/* {/* <Text style={styles.title}>{main.temp} ºC</Text> */}
                <Text style={styles.title}>{weather[0].description}</Text>
                <Text style={styles.temp}>{main.temp} ºC</Text>                
                <Text style={styles.description}>{new Date(dt).toLocaleDateString("pt-BR")}</Text>                
                <Text style={styles.city}>{name}</Text>                
               
            </View>           

            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 32,
        justifyContent: 'center', 
        alignContent: 'center', 
        flexDirection: 'column'         
    },
    main: {
        flex: 1,
        justifyContent: 'center',        
    },
    title: {        
        color: '#322153',
        fontSize: 58,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 300,
        marginTop: 100,  
        justifyContent: 'center', 
        alignContent: 'center'               
    },
    description: {
        color: '#6C6C80',
        fontSize: 34,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 34,
      },
    city:{
        color: '#6C6C80',
        fontSize: 36,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 36,
    },

    temp: {        
        color: '#6C6C80',
        fontSize: 58,
        marginTop: 20,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 58,        
    },
});

