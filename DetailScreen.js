// DetailScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Navigation back icon */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{item?.title || 'Detail View'}</Text>
      <Text style={styles.description}>{item?.description || 'Detailed information displayed here.'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  backButton: { marginBottom: 20 },
  backText: { color: '#007AFF', fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#444' }
});