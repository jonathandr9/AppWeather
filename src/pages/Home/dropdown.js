import RNPickerSelect from 'react-native-picker-select';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios' ;
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


export const Dropdown = () => {

    const [ufs, setUfs] = useState([]);
    const [selectedUf, setSelectedUf] = useState(0);
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');

    

    const navigation = useNavigation();

  
    function handleNavigateToWeather(){        

        axios.get('http://api.openweathermap.org/data/2.5/weather',{
                params:{
                    appId: '',
                    lang: 'pt',
                    units: 'metric',
                    q: city
                }
            }).then(response =>{            
                navigation.navigate('Weather',  response.data);
        });    
    
    }

    useEffect(() =>{
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response =>{
            
            const responseUfs = response.data;            

            setUfs(responseUfs);

        })
    }, []);

    useEffect(() =>{

        if(selectedUf === 0){
            return;
        }

        axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response =>{
            
            const responseCities = response.data;            

            setCities(responseCities);

        })
    }, [selectedUf]);

    function handleSelectUF(uf){
        
        setSelectedUf(uf);        
    }

    function handleSelectCity(city){        
        
        setCity(city);        
    }

    return (

        <>

        <RNPickerSelect 
            
            onValueChange={(value) => handleSelectUF(value)}
            items = {ufs.map(uf =>(
                 {label: uf.nome, value: uf.id/*,  key:uf.id */}
             ))}
            placeholder={{
                label: 'Selecione uma UF...',
                value: null,
            }}
            style={styles.input} 
            // placeholderTextColor="red"
        />

        <RNPickerSelect 
            
            onValueChange={(value) => {handleSelectCity(value)}}
            items={cities.map(city =>(
                {label: city.nome, value: city.nome/*,  key:uf.id */}
            ))}
            placeholder={{
                label: 'Selecione uma Cidade...',
                value: 0,
            }}
            style={styles.input} 
            // placeholderTextColor="red"
        />

        <RectButton style={styles.button} onPress={handleNavigateToWeather}>
             <View style={styles.buttonIcon}>
                <Text>></Text>
                </View>
                    <Text style={styles.buttonText}>
                    Buscar
                    </Text>
        </RectButton>

        </>
    );
};

const styles = StyleSheet.create({

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },   

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        // backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
      }
})