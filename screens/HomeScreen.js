import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ProductList from '../components/ProductList';
import { getProducts } from '../api';
import { useIsFocused } from '@react-navigation/native';

const HomeScreen = () => {
  const isFocused = useIsFocused(); // Hook para detectar si la pantalla está enfocada
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, [isFocused]); // Se ejecuta cuando la pantalla se enfoca o desenfoca

  return (
    <View style={{ flex: 1 }}>
      <ProductList products={products} />
    </View>
  );
};

export default HomeScreen;
