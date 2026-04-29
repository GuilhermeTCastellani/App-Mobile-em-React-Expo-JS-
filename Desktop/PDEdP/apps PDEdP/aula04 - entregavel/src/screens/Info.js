import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MemberCard from '../components/MemberCard';
import styles from '../components/Info.styles';

const MEMBERS = [
  { name: 'Guilherme Tadeu Castellani', ra: '1136257' },
  { name: 'Arthur B. Spada', ra: '1136264' },
  { name: 'Emanoel Rosa', ra: '1136489' },
  { name: 'Maria Eduarda Schulze', ra: '1136125' },
  { name: 'Mariana Mellara', ra: '1136271' },
];

export default function Info() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>PDEdP</Text>
      <Text style={styles.pageTitle}>Nosso Grupo</Text>
      <Text style={styles.pageSubtitle}>Projeto Design e Engenharia de Processos</Text>

      <Text style={styles.sectionLabel}>Integrantes</Text>

      {MEMBERS.map((member, index) => (
        <MemberCard key={member.ra} member={member} index={index} />
      ))}

      <View style={styles.appInfoSection}>
        <Text style={styles.appInfoTitle}>Sobre o App</Text>
        <Text style={styles.appInfoText}>
          Aplicativo desenvolvido em React Native com Expo, consumindo a Fake Store API.
          Autenticação, listagem por categoria e detalhes de produtos.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Atitus Educação</Text>
      </View>
    </ScrollView>
  );
}
