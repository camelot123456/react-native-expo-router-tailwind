import { memo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabBarItem = ({ navigation, route, isFocused, descriptors }) => {
  const [options] = useState(descriptors[route.key]);
  const [label] = useState(options.options.title);

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  if (['_sitemap', '+not-found', 'account'].includes(route.name)) return null;

  return (
    <TouchableOpacity
      className="flex-1 gap-1 justify-center items-center"
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {options.options.tabBarIcon &&
        options.options.tabBarIcon({
          color: isFocused ? '#1d4ed8' : '#374151',
          size: 22,
        })}
      <Text className={isFocused ? 'text-blue-700' : 'text-gray-700'}>{label}</Text>
    </TouchableOpacity>
  );
};

export default memo(TabBarItem);
