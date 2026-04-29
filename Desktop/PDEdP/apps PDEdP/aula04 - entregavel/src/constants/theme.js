import { Platform, StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#1B5E3F',
  primaryLight: '#E8F2ED',
  primaryDark: '#1C1C1E',
  background: '#F7F5F2',
  surface: '#FFFFFF',
  text: '#1C1C1E',
  textSecondary: '#6C6C70',
  textMuted: '#AEAEB2',
  border: '#E5E5EA',
  white: '#FFFFFF',
  error: '#FF3B30',
};

export const FONTS = {
  serif: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  sans: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
  mono: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
};

export const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.06,
  shadowRadius: 6,
  elevation: 2,
};

export const globalStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
