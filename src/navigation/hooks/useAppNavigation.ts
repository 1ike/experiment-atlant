import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { RootStackParamList } from '../types';

export default function useAppNavigation<R extends keyof RootStackParamList>() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList, R>>();
}
