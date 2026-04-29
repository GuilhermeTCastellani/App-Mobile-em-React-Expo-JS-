import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function CategoryBadge({ category }) {
  return <Text style={styles.badge}>{category}</Text>;
}

const styles = StyleSheet.create({
  badge: {
    fontFamily: FONTS.sans,
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
});
