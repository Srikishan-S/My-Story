// DataScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DataScreen() {
  const [apiData, setApiData] = useState([]);
  const [storedValue, setStoredValue] = useState('');

  // 1. External API Integration
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      ? fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
          .then((res) => res.json())
          .then((data) => setApiData(data))
          .catch((err) => console.error(err));
  }, []);

  // 2. Local Storage Persistence Functions
  const saveDataLocally = async () => {
    try {
      await AsyncStorage.setItem('user_preference', 'Dark Mode Enabled');
      loadDataLocally();
    } catch (e) {
      console.error(e);
    }
  };

  const loadDataLocally = async () => {
    try {
      const val = await AsyncStorage.getItem('user_preference');
      if (val !== null) setStoredValue(val);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Local Storage Data</Text>
      <Button title="Save Preference to AsyncStorage" onPress={saveDataLocally} />
      <Text style={styles.storedText}>Persisted Value: {storedValue}</Text>

      <Text style={styles.heading}>Fetched API Data</Text>
      <FlatList
        data={apiData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.apiItem}>
            <Text style={styles.apiTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  storedText: { marginVertical: 8, fontStyle: 'italic' },
  apiItem: { padding: 10, borderBottomWidth: 1, borderColor: '#eee' },
  apiTitle: { fontSize: 14 }
});