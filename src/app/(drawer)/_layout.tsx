import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="about" />
    </Drawer>
  );
};

export default DrawerLayout;
