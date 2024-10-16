import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { View } from 'react-native';
import TabBarItem from 'src/components/tab-bar/tab-bar-item';

const TabBar = ({ state, state: { routes }, descriptors, navigation }: Readonly<BottomTabBarProps>) => {
  return (
    <View className="bg-white flex flex-row justify-between items-center py-2">
      {routes.map((route, index) => (
        <TabBarItem key={index} isFocused={state.index === index} navigation={navigation} route={route} descriptors={descriptors} />
      ))}
    </View>
  );
};

export default memo(TabBar);
