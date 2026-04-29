import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';
import { formatBRL } from '../utils/format';

export default function PriceCard({ price }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Preço</Text>
      <Text style={styles.price}>{formatBRL(price)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  label: {
    fontFamily: FONTS.sans,
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  price: { fontFamily: FONTS.mono, fontSize: 28, fontWeight: '700', color: COLORS.text },
});
