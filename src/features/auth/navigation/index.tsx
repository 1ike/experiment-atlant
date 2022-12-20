import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';

import SignInScreen from '../screens/SignInScreen';


export type AuthStackParamList = {
  SignIn: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>;


const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
