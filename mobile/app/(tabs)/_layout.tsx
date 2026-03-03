import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#92c9a4' : '#94a3b8',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginBottom: Platform.OS === 'ios' ? 0 : 4,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: colorScheme === 'dark' ? '#0d1f12' : '#ffffff',
            borderTopColor: colorScheme === 'dark' ? '#23482f' : '#e2e8f0',
            borderTopWidth: 1,
            height: 88,
            paddingTop: 10,
          },
          android: {
            backgroundColor: colorScheme === 'dark' ? '#0d1f12' : '#ffffff',
            borderTopColor: colorScheme === 'dark' ? '#23482f' : '#e2e8f0',
            borderTopWidth: 1,
            height: 64,
            paddingTop: 8,
            paddingBottom: 8,
          },
          default: {
            backgroundColor: colorScheme === 'dark' ? '#0d1f12' : '#ffffff',
            borderTopColor: colorScheme === 'dark' ? '#23482f' : '#e2e8f0',
            height: 64,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: 'Workouts',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="figure.run" color={color} />,
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          title: 'Exercises',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="dumbbell.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="chart.bar.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
