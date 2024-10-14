import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const VocabularyDetail = () => {
  const { word } = useLocalSearchParams<{ word: string }>();

  return (
    <View>
      <Text>Word: {word}</Text>
    </View>
  );
};

export default VocabularyDetail;
