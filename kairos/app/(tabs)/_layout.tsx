import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      
      
      <Tabs.Screen
      name="index"
      options={{
        title: "Calendar",
        tabBarIcon: ({color, focused}) => (
          <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
        )
      }}
      />
      
      {/*}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      */}
 

      {/*
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      */}

      <Tabs.Screen
        name="assignment"
        options={{
          title: "Assignment",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="assignment" size={20} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
      name="add"
      options={{
        title: "Add",
        tabBarIcon: ({color, focused}) => (
          <Ionicons name="add" size={24} color={color} />
        )
      }}
      />

      <Tabs.Screen 
        name="courses"
        options={{
          title: "Courses",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="class" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
