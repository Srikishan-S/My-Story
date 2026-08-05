// HomeScreen.js
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const sampleData = [
  { id: '1', title: 'React Native Basics', description: 'Learn cross-platform mobile development.' },
  { id: '2', title: 'AsyncStorage Persistence', description: 'Store key-value data persistently.' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* App Header with Logo */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>My App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { item })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', elevation: 2 },
  logo: { width: 32, height: 32 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  settingsIcon: { fontSize: 22 },
  card: { padding: 16, backgroundColor: '#fff', marginHorizontal: 15, marginTop: 10, borderRadius: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 }
});