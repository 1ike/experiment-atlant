import * as React from 'react';
import { RootStackType } from '~/navigation';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';


export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};


export default function renderAuth(Stack: RootStackType) {
  return (
    <Stack.Group>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Group>
  );
}
