import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { Folder as FolderState, useFolderStore } from 'src/config/zutand/folder.store';

const FolderEdit = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { folder, findFolder, updateFolder } = useFolderStore((state) => state);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const onSave = ({ ...args }) => {
    updateFolder({
      ...folder,
      ...args,
    });

    router.navigate('/folder/' + id);
  };

  useEffect(() => {
    findFolder(id);
  }, [id]);

  useEffect(() => {
    setName(folder.name);
    setDescription(folder.description);
    setImage(folder.image);
  }, [folder]);

  return (
    <View className="flex-1 p-4 bg-white">
      {/* Folder Image */}
      <View className="items-center mb-6">
        <Image source={{ uri: folder?.image }} className="w-32 h-32 rounded-md" resizeMode="cover" />
      </View>

      {/* Name Input */}
      <View className="mb-4">
        <Text className="text-lg font-bold text-gray-800 mb-2">Tên Folder</Text>
        <TextInput className="border border-gray-300 p-2 rounded-md" placeholder="Nhập tên folder" value={name} onChangeText={setName} />
      </View>

      {/* Description Input */}
      <View className="mb-4">
        <Text className="text-lg font-bold text-gray-800 mb-2">Mô tả</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Nhập mô tả"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* Image URL Input */}
      <View className="mb-6">
        <Text className="text-lg font-bold text-gray-800 mb-2">URL Hình ảnh</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Nhập URL hình ảnh"
          value={image}
          onChangeText={setImage}
        />
      </View>

      {/* Save Button */}
      <View className="flex-row justify-between gap-x-10">
        <View className="flex-1">
          <Button title="Cancel" color="gray" onPress={() => router.navigate('/folder/' + id)} />
        </View>
        <View className="flex-1">
          <Button title="Lưu" onPress={() => onSave({ ...folder, name, description, image })} />
        </View>
      </View>
    </View>
  );
};

export default FolderEdit;
