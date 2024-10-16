import { useLocalSearchParams, router } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useFolderStore } from 'src/config/zutand/folder.store';

const FolderDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { folder, findFolder } = useFolderStore((state) => state);

  useEffect(() => {
    findFolder(id);
  }, [id]);

  return (
    <>
      <View className="flex-1 p-4 bg-white">
        <View className="items-center mb-4">
          <Image source={{ uri: folder?.image }} className="w-40 h-40 rounded-lg" resizeMode="cover" />
        </View>

        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-800 mb-2">{folder?.name || 'Unnamed Folder'}</Text>
          <Text className="text-base text-gray-600">{folder?.description || 'No description available.'}</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between gap-x-4">
          <View className="flex-1">
            <Button title="Edit" onPress={() => router.navigate(`/folder/edit/${id}`)} />
          </View>
          <View className="flex-1">
            <Button title="Delete" color="red" onPress={() => router.navigate(`/folder/delete/${id}`)} />
          </View>
          <View className="flex-1">
            <Button title="Cancel" color="gray" onPress={() => router.navigate('/folder')} />
          </View>
        </View>
      </View>
    </>
  );
};

export default FolderDetail;
