import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { getProduct } from '../services/fakestore';
import CategoryBadge from '../components/CategoryBadge';
import DetailCard from '../components/DetailCard';
import PriceCard from '../components/PriceCard';
import styles from '../components/ProductDetail.styles';

export default function ProductDetail({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchProduct(id);
  }, [id]);

  async function fetchProduct(productId) {
    setLoading(true);
    try {
      const data = await getProduct(productId);
      setProduct(data);
    } catch {
      Alert.alert('Erro', 'Não foi possível carregar o produto.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Carregando produto...</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.imageCard}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.body}>
        <CategoryBadge category={product.category} />
        <DetailCard label="Nome do Produto">
          <Text style={styles.productTitle}>{product.title}</Text>
        </DetailCard>
        <PriceCard price={product.price} />
        <DetailCard label="Descrição">
          <Text style={styles.descriptionText}>{product.description}</Text>
        </DetailCard>
      </View>
    </ScrollView>
  );
}
