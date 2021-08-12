import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Nombres = () => {
  const[Nombre, setNombreMayus] = useState('');
  return (
    <View style={{padding: 10}}>
    <TextInput
        style={{height: 90}}
        placeholder="Escribe aca tu nombre en minuscula"
        onChangeText={Nombre => setNombreMayus(Nombre)}
        
      />
      <Text style={{padding: 10, fontSize: 30}}>
      {Nombre.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}
      </Text>
      
    </View>
  );
}
export default Nombres