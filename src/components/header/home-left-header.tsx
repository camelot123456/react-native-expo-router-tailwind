import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';

const HomeLeftHerder = (props) => {
  const router = useRouter();
  const onPress = () => {
    router.push('/account');
  };

  return (
    <View className="mx-4">
      <Pressable onPress={onPress}>
        <AntDesign name="bars" size={20} color="#000000" />
      </Pressable>
    </View>
  );
};

export default memo(HomeLeftHerder);
