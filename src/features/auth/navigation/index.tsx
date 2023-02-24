import * as React from 'react';

import { RootStackType } from '~/navigation';
import SendEmailScreen from '../screens/recoveryPassword/SendEmailScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { TextInput, Text } from '$ui';
import SkipButton from '../components/Header/Button';

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
      <Stack.Screen
        name="SendEmail"
        component={SendEmailScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerLeft: () => <SkipButton onPress={() => {}} />,
          headerRight: () => <SkipButton onPress={() => {}} />,
          // headerBackVisible: false,
        }}
      />
    </Stack.Group>
  );
}
