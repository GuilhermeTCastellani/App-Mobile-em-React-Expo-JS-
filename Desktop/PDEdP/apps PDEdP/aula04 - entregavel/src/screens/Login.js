import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View, Text, TextInput, TouchableOpacity,
  Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { COLORS } from '../constants/theme';
import { getUsers, login } from '../services/fakestore';
import styles from '../components/Login.styles';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin() {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Preencha usuário e senha.');
      return;
    }
    setLoading(true);
    try {
      const users = await getUsers();
      const userExists = users.some(
        (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
      );
      if (!userExists) {
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
        return;
      }
      const data = await login(username, password);
      if (data.token) {
        navigation.replace('Home');
      } else {
        Alert.alert('Erro', 'Token não recebido.');
      }
    } catch {
      Alert.alert('Erro', 'Falha de rede. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <Text style={styles.eyebrow}>Fake Store</Text>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Entre com suas credenciais para continuar</Text>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          placeholderTextColor={COLORS.textMuted}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputWithEye}
            placeholder="Digite sua senha"
            placeholderTextColor={COLORS.textMuted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword((v) => !v)} activeOpacity={0.7}>
            <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={COLORS.textMuted} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading
            ? <ActivityIndicator color={COLORS.white} />
            : <Text style={styles.buttonText}>Entrar</Text>}
        </TouchableOpacity>

        <Text style={styles.hint}>johnd / m38rmF$</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
