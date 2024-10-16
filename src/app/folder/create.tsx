import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { Folder as FolderState, useFolderStore } from 'src/config/zutand/folder.store';

const FolderCreate = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addFolder } = useFolderStore((state) => state);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>(`https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`);

  const onSave = ({ ...args }) => {
    addFolder({ ...args });

    router.navigate('/folder');
  };

  return (
    <View className="flex-1 p-4 bg-white">
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
      <View className="flex-row justify-between">
        <View className="flex-1 mr-2">
          <Button title="Cancel" color="gray" onPress={() => router.push('/folder')} />
        </View>
        <View className="flex-1 ml-2">
          <Button title="Create" onPress={() => onSave({ name, description, image })} />
        </View>
      </View>
    </View>
  );
};

export default FolderCreate;
