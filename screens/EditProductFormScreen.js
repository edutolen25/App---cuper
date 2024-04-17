import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Switch,  TextInput, Button } from 'react-native';
import { updateProduct } from '../api';

const EditProductFormScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [product, setProduct] = useState(item);

  const handleActualizarFormulario = async () => {
    const res = await updateProduct(product, item.barcode);
    console.log(JSON.stringify(product));
    navigation.navigate('HomeScreen');
  };

  const handleChange = (name, value) => {
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const [isEnabled, setIsEnabled] = useState(product.status === 1);


  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    handleChange('status', isEnabled ? 0 : 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Producto</Text>
      <TextInput
        placeholder="Código de barras"
        onChangeText={(text) => handleChange('barcode', text)}
        style={styles.input}
        value={product.barcode} 
      />
      <TextInput
        placeholder="Descripción"
        onChangeText={(text) => handleChange('description', text)}
        style={styles.input}
        value={product.description} 
      />
      <TextInput
        placeholder="Marca"
        onChangeText={(text) => handleChange('brand', text)}
        style={styles.input}
        value={product.brand} 
      />
      <TextInput
      placeholder="Precio de compra"
      keyboardType='numeric'
      onChangeText={(text) => handleChange('cost', text !== '' ? parseInt(text) : 0)}
      style={styles.input}
      value={product.cost !== 0 ? product.cost.toString() : ''} 
      />
      <TextInput
      placeholder="Precio de venta"
      keyboardType='numeric'
      onChangeText={(text) => handleChange('price', text !== '' ? parseInt(text) : 0)}
      style={styles.input}
      value={product.price !== 0 ? product.price.toString() : ''} 
     />
     
      <TextInput
        placeholder="Fecha de caducidad"
        onChangeText={(text) => handleChange('expiredDate', text)}
        style={styles.input}
        value={product.expiredDate} 
      />
      <TextInput
        placeholder="Existencias"
        keyboardType='numeric'
        onChangeText={(text) => handleChange('stock', text !== '' ? parseInt(text) : 0)}
        style={styles.input}
        value={product.stock !== 0 ? product.stock.toString() : ''} 
      />
      
      <Text style={styles.contenido}>Estatus</Text>
      
      <Switch
              trackColor={{ true: "#6B5A08" }}
              thumbColor={isEnabled ? "#FF9B00" : "#f4f3f4"}
              ios_backgroundColor="#5B4201"
              onValueChange={toggleSwitch}
              value={isEnabled}
      />


      <Button
        title="Enviar"
        onPress={handleActualizarFormulario}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffddd2",
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

  contenido:{
    fontSize: 15,
    marginBottom: 15,
    marginTop: 10
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
    width: '40%'
  },


});

export default EditProductFormScreen;
