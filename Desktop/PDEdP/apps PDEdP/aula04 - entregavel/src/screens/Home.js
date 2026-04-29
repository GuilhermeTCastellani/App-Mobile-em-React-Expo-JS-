import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, Alert } from 'react-native';
import { getProducts, getProductsByCategory } from '../services/fakestore';
import ProductCard from '../components/ProductCard';
import CategoryFilterBar from '../components/CategoryFilterBar';
import HeaderButton from '../components/HeaderButton';
import styles from '../components/Home.styles';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderButton label="Logout" onPress={() => navigation.replace('Login')} />,
      headerRight: () => <HeaderButton label="Info" onPress={() => navigation.navigate('Info')} />,
    });
  }, [navigation]);

  const fetchProducts = useCallback(async (category) => {
    setLoading(true);
    try {
      const data = category ? await getProductsByCategory(category) : await getProducts();
      setProducts(data);
    } catch {
      Alert.alert('Erro', 'Não foi possível carregar os produtos.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory, fetchProducts]);

  return (
    <View style={styles.container}>
      <CategoryFilterBar selected={selectedCategory} onSelect={setSelectedCategory} />
      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Carregando produtos...</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard item={item} onPress={() => navigation.navigate('ProductDetail', { id: item.id })} />
          )}
          style={{ flex: 1 }}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
