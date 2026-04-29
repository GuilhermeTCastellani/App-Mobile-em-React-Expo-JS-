import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function MemberCard({ member, index }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{num}</Text>
      <View style={styles.info}>
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.ra}>RA {member.ra}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: 16,
  },
  number: { fontFamily: FONTS.mono, fontSize: 13, color: COLORS.textMuted, width: 28 },
  info: { flex: 1, gap: 3 },
  name: { fontFamily: FONTS.sans, fontSize: 15, fontWeight: '600', color: COLORS.text },
  ra: { fontFamily: FONTS.mono, fontSize: 12, color: COLORS.textSecondary },
});
