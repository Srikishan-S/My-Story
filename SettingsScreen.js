// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings Screen</Text>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Push Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
        />
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Account Profile</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Privacy & Security</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  menuText: { fontSize: 16 },
  arrow: { fontSize: 18, color: '#888' }
});