import { useNavigation } from '@react-navigation/native';

import { setUser, User } from '~/features/auth/state/auth';
import { useAppDispatch } from '~/state/store';


export default function useGoHome() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();


  return (user: User) => {
    dispatch(setUser(user));
    navigation.reset({
      index: 0,
      routes: [{ name: 'Root' }],
    });
  };
}
