import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';
import { formatBRL } from '../utils/format';

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.6}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.price}>{formatBRL(item.price)}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  imageWrapper: {
    width: 68,
    height: 68,
    borderRadius: 8,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: { width: 56, height: 56 },
  info: { flex: 1, marginLeft: 14, gap: 6 },
  name: { fontFamily: FONTS.sans, fontSize: 14, color: COLORS.text, lineHeight: 20 },
  price: { fontFamily: FONTS.mono, fontSize: 14, fontWeight: '700', color: COLORS.primary },
  arrow: { fontSize: 24, color: COLORS.textMuted, fontWeight: '300', paddingLeft: 8 },
});
