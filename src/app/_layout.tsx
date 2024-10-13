import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import TabBar from 'src/components/tab-bar/tab-bar';

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerLeft: (props) => <Text className="bg-red-700 ml-4">Hello</Text>,
          headerTitleAlign: 'center',
          title: 'Home',
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="folder"
        options={{
          headerTitleAlign: 'center',
          title: 'Folder',
          tabBarIcon: ({ color, size }) => <AntDesign name="folder1" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="vocabulary"
        options={{
          headerTitleAlign: 'center',
          title: 'Vocab',
          tabBarIcon: ({ color, size }) => <AntDesign name="file1" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitleAlign: 'center',
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
