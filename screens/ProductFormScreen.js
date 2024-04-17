import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,Button, Switch } from 'react-native';
import { insertProduct } from '../api';
const ProductFormScreen = ({navigation}) => {
    const[product,setProduct]=useState({
        barcode:"",
        description:"",
        brand:"",
        cost:0,
        price:0,
        expiredDate:"",
        status:0,
        stock:0
    })
    const handleChange =(name,value)=> setProduct({...product,[name]:value});
    const handleEnviarFormulario =async () => {
       const res=await insertProduct(product);
       console.log(JSON.stringify(product))
       navigation.navigate('HomeScreen');
      };
      const [isEnabled, setIsEnabled] = useState(product.status === 1);


      const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        handleChange('status', isEnabled ? 0 : 1);
      };
    
      return (
        <View style={styles.container}>
        <Text style={styles.titulo}>Nuevo Producto</Text>
        <TextInput
          placeholder="Código de barras"
          onChangeText={(text) => handleChange('barcode',text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Descripción"
          onChangeText={(text) => handleChange('description',text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Marca"
          onChangeText={(text) => handleChange('brand',text)}
          style={styles.input}
        />
         <TextInput
          placeholder="Precio de compra"
          keyboardType='numeric'
          onChangeText={(text) => handleChange('cost',parseInt(text))}
          style={styles.input}
        />
        <TextInput
          placeholder="Precio de venta"
          keyboardType='numeric'
          onChangeText={(text) => handleChange('price',parseInt(text))}
          style={styles.input}
        />
        <TextInput
          placeholder="Fecha de caducidad"
          onChangeText={(text) => handleChange('expiredDate',text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Existencias"
          keyboardType='numeric'
          onChangeText={(text) => handleChange('stock',parseInt(text))}
          style={styles.input}
        />

        <Text>Estatus</Text>


        <Switch
          trackColor={{ true: "#6B5A08" }}
          thumbColor={isEnabled ? "#FF9B00" : "#f4f3f4"}
          ios_backgroundColor="#5B4201"
          onValueChange={toggleSwitch}
          value={isEnabled}
          />

        <Button
          title="Enviar"
          onPress={handleEnviarFormulario}
          style={styles.button}
        />

        

      </View>
    );
};
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor:"#ffddd2",
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      textInputContainer: {
        marginBottom: 20,
        
      },
      input: {
        height: 40,
        borderColor: '#e29578',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        width:'40%'
      },
      buttonText: {
       
      },
    });

export default ProductFormScreen