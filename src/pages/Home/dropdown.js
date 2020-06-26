import RNPickerSelect from 'react-native-picker-select';
import React, {useEffect, useState} from 'react';
import axios from 'axios' ;



export const Dropdown = () => {

    const [ufs, setUfs] = useState([]);
    const [selectedUf, setSelectedUf] = useState(0);
    const [cities, setCities] = useState([]);

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

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response =>{
            
            const responseCities = response.data;            

            setCities(responseCities);

        })
    }, [selectedUf]);

    function handleSelectUF(uf){
        
        setSelectedUf(uf);        
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
            // placeholderTextColor="red"
        />

        <RNPickerSelect 
            
            onValueChange={(value) => console.log(value)}
            items={cities.map(city =>(
                {label: city.nome, value: city.id/*,  key:uf.id */}
            ))}
            placeholder={{
                label: 'Selecione uma Cidade...',
                value: 0,
            }}
            // placeholderTextColor="red"
        />

        </>
    );
};