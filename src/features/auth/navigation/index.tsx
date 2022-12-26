import * as React from 'react';
import { RootStackType } from '~/navigation';
import SendEmailScreen from '../screens/recoveryPassword/SendEmailScreen';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';


export type AuthParamList = {
  SignIn: undefined;
  SignUp: undefined;
  SendEmail: undefined;
};


export default function renderAuth(Stack: RootStackType) {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SendEmail" component={SendEmailScreen} />
    </Stack.Group>
  );
}
