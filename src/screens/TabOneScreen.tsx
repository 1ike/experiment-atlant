import { StyleSheet } from 'react-native';
import { useEffect } from 'react';

import {
  selectAccessToken, selectRefreshToken, setAccessToken, setRefreshToken, logout, selectUser,
} from '~/features/auth/state/auth';
import { useAppSelector, useAppDispatch } from '$store';
import EditScreenInfo from '~/components/EditScreenInfo';
import { Text, View } from '~/components/Themed';
import { RootTabScreenProps } from '~/navigation/types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const accessToken = useAppSelector(selectAccessToken);
  const refreshToken = useAppSelector(selectRefreshToken);
  // console.log('accessToken = ', accessToken);
  // console.log('refreshToken = ', refreshToken);
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(logout())
    // if (!accessToken) dispatch(setAccessToken('aaa'))
    // if (!refreshToken) dispatch(setRefreshToken('lll'))
  }, []);


  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text style={styles.title}>
            Hello
            {' '}
            {user.name}
            !
          </Text>
          <Text>
            email:
            {' '}
            {user.email}
          </Text>
        </>
      )}

      {/* <Text>
        accessToken:
        {' '}
        {accessToken ?? 'null'}
      </Text>
      <Text>
        refreshToken:
        {' '}
        {refreshToken ?? 'null'}
      </Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
