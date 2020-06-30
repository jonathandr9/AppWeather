import React, {useEffect, useState}from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import axios from 'axios' ;
import {useRoute} from '@react-navigation/native';

export default function Weather(){
    
    
    const dayBackground = require('../../assets/After-Noon.png');
    const nightBackground = require('../../assets/Night.png');

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

    const date =  new Date(dt * 1000).toLocaleDateString();

    const time =  new Date(dt * 1000).getHours();      

    return (         

        <ImageBackground 
            source={  time > 6 & time < 18  ? dayBackground : nightBackground  } 
            style={styles.container}>
            
           

            <View style={styles.header}>
                {/* {/* <Text style={styles.title}>{main.temp} ºC</Text> */}
                <Text style={styles.city}>{name}</Text>  
                <Text style={styles.temp}>{main.temp} ºC</Text>                
                <Text style={styles.title}>{weather[0].description}</Text>                
                <Text style={styles.description}>{date}</Text>                                                                                                         
               
            </View>           
           
            <View style={styles.main}>                           

                <View style={styles.moreData}>
                    <Text style={styles.numberData}>{main.temp_min }</Text>
                    <Text>Minima</Text>
                </View>

                <View style={styles.moreData}>
                    <Text style={styles.numberData}>{main.temp_max }</Text>
                    <Text>Máxima</Text>
                </View>

                <View style={styles.moreData}>
                    <Text style={styles.numberData}>{main.humidity }</Text>
                    <Text>Umidade</Text>
                </View>

                <View style={styles.moreData}>
                    <Text style={styles.numberData}>{main.feels_like }</Text>
                    <Text>Sensação</Text>
                </View>

                <View style={styles.moreData}>
                    <Text style={styles.numberData}>{main.pressure }</Text>
                    <Text>Pressão</Text>
                </View>

                <View style={styles.moreData}>
                    <Text style={styles.numberData}>{wind.speed }</Text>
                    <Text>Vento</Text>
                </View>
           </View>
            
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 32,
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center',        
        resizeMode: "contain",
        // backgroundColor: 'blue'         
    },
    header: {        
        justifyContent: 'center', 
        alignContent: 'center',
        alignItems: 'center',
        margin: 30       
    },
    main: {        
        // justifyContent: 'center', 
        alignContent: 'space-around',   
        flexDirection: 'row',
        margin: 10 ,
        flexWrap: 'wrap',
        
    },
    title: {        
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 300,
        marginTop: 16,  
        justifyContent: 'center', 
        alignContent: 'center'               
    },
    description: {
        color: '#000',
        fontSize: 34,
        marginTop: 12,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 34,
      },
    city:{
        color: '#FFF',
        fontSize: 36,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 36,
    },

    temp: {        
        color: '#FFF',
        fontSize: 58,
        marginTop: 20,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 58,        
    },
    moreData:{        
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        margin: 8,
        borderColor: '#FFF',        
        textAlign: 'center'
    },
    numberData:{
        color: '#FFF',
        fontSize: 25,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 34,
    }
  
});

