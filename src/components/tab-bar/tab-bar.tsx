import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { View } from 'react-native';
import TabBarItem from 'src/components/tab-bar/tab-bar-item';

const TabBar = ({ state, state: { routes }, descriptors, navigation }: Readonly<BottomTabBarProps>) => {
  return (
    <View className="absolute bottom-[25px] bg-white flex flex-1 flex-row justify-between items-center py-[15px] mx-[20px] rounded-[30px] shadow">
      {routes.map((route, index) => (
        <TabBarItem key={index} isFocused={state.index === index} navigation={navigation} route={route} descriptors={descriptors} />
      ))}
    </View>
  );
};

export default memo(TabBar);
