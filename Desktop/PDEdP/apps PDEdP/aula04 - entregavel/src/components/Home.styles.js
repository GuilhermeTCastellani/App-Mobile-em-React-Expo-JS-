import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  loadingText: { fontFamily: FONTS.sans, fontSize: 13, color: COLORS.textSecondary },
  list: { flexGrow: 1, paddingBottom: 32 },
});
