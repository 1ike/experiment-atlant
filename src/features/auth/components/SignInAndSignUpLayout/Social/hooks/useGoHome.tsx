import { setUser, User } from '~/features/auth/state/auth';
import useAppNavigation from '~/navigation/hooks/useAppNavigation';
import { useAppDispatch } from '~/state/store';


export default function useGoHome() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  return (user: User) => {
    dispatch(setUser(user));
    navigation.reset({
      index: 0,
      routes: [{ name: 'Root' }],
    });
  };
}
