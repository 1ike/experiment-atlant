import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';

import WelcomeScreen from '../screens/WelcomeScreen';


export type AuthStackParamList = {
  Welcome: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>;


const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
