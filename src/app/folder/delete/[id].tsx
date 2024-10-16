import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Modal, Text, View, Button, Pressable } from 'react-native';
import { useFolderStore } from 'src/config/zutand/folder.store';

const FolderDelete = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { deleteFolder } = useFolderStore((state) => state);

  const handleCancel = () => router.back();

  const handleDelete = () => {
    deleteFolder(id);
    router.navigate('/folder');
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true} onRequestClose={handleCancel}>
      <View className="bg-blue-100 w-[80%] h-[200px] flex flex-col justify-between p-6 text-center rounded-md my-auto mx-auto shadow">
        <Text className="">Do you want delete this folder [{id}] ?</Text>
        <View className="flex-row justify-between gap-x-10">
          <View className="flex-1">
            <Button title="Delete" color="red" onPress={handleDelete} />
          </View>
          <View className="flex-1">
            <Button title="Cancel" color="gray" onPress={handleCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FolderDelete;
