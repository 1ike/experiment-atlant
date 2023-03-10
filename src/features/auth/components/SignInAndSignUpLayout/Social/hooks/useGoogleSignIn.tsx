import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

import { googleExpoClientId, googleAndroidClientId } from '~/config';
import { User } from '~/features/auth/state/auth';
import useGoHome from './useGoHome';


WebBrowser.maybeCompleteAuthSession();

export default function useGoogleSignIn() {
  const goHome = useGoHome();


  const [request, response, promptAsync] = Google.useAuthRequest({
    // expoClientId: googleExpoClientId, // deprecated?
    androidClientId: googleAndroidClientId,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      if (authentication?.accessToken) {
        // eslint-disable-next-line no-inner-declarations
        async function getUser() {
          const responseUserData = await fetch(
            'https://www.googleapis.com/userinfo/v2/me',
            { headers: { Authorization: `Bearer ${authentication!.accessToken}` } },
          );
          const userData = (await responseUserData.json()) as User;

          return userData;
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getUser()
          .then((user) => {
            goHome(user);
          })
          .catch((error) => console.error(error));
      }
    }
  }, [response, goHome]);

  return {
    onPress: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      if (request) promptAsync();
    },
  };
}
