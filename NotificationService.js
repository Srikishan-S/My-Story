// NotificationService.js
import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function NotificationService() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Permission needed', 'Failed to get push token for push notification!');
      return;
    }
  }

  const triggerLocalNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Alert 🔔",
        body: 'This is a successfully triggered test notification!',
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Trigger Test Notification" onPress={triggerLocalNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});