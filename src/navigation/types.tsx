/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParamList } from '~/features/auth/navigation';
import { StackParamList1 } from '~/screens/Stack1';
import { StackParamList2 } from '~/screens/Stack2';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Stack1: NavigatorScreenParams<StackParamList1>;
  Stack2: NavigatorScreenParams<StackParamList2>;
  Modal: undefined;
  NotFound: undefined;
} & AuthParamList;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
