import { Stack } from 'expo-router';

const StackLayout = () => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name="(tabs)" />
    <Stack.Screen name="vocabulary/[word]" />
  </Stack>
);

export default StackLayout;
