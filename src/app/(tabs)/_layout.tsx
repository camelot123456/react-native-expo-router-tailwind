import { AntDesign } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import TabBar from 'src/components/tab-bar/tab-bar';
import HomeLeftHerder from 'src/components/header/home-left-header';

const TabLayout = () => {
  return (
    <>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            headerLeft: (props) => <HomeLeftHerder {...props} />,
            headerRight: (props) => (
              <Link href="/vocabulary/bao1403" className="mx-4">
                <AntDesign name="wordfile1" size={20} color="#000000" />
              </Link>
            ),
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
            href: '/settings',
            headerTitleAlign: 'center',
            title: 'Settings',
            tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            headerTitleAlign: 'center',
            title: 'Account',
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({});

export default TabLayout;
