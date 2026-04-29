import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingBottom: 48 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  loadingText: { fontFamily: FONTS.sans, fontSize: 13, color: COLORS.textSecondary },
  errorText: { fontFamily: FONTS.sans, fontSize: 14, color: COLORS.error },
  imageCard: {
    width,
    height: 280,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  image: { width: width * 0.55, height: 220, resizeMode: 'contain' },
  body: { paddingHorizontal: 24, paddingTop: 8 },
  productTitle: {
    fontFamily: FONTS.serif,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    lineHeight: 30,
  },
  descriptionText: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
});
