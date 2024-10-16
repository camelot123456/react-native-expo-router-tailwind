import { useRouter } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Folder as FolderState, useFolderStore } from 'src/config/zutand/folder.store';

const Folder = () => {
  const { folders } = useFolderStore((state) => state);
  const router = useRouter();

  const onFolderPress = (item: FolderState) => {
    router.navigate(`/folder/${item?.id}`);
  };

  const renderItem = ({ item }: { item: FolderState }) => (
    <TouchableOpacity onPress={() => onFolderPress(item)} className="flex-row items-center p-4 mb-2 bg-white rounded-lg shadow">
      <Image source={{ uri: item.image }} className="w-16 h-16 rounded-md mr-4" resizeMode="cover" />
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-800">{item.name || 'Unnamed Folder'}</Text>
        <Text className="text-sm text-gray-600">{item.description || 'No description available.'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={folders}
      keyExtractor={(item) => item.id || Math.random().toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 4 }}
    />
  );
};

export default Folder;
