import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

import { User } from '~/features/auth/state/auth';
import useGoHome from './useGoHome';

WebBrowser.maybeCompleteAuthSession();

export default function useGoogleSignIn() {
  const goHome = useGoHome();


  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '198119258557-mut8d8rlcbu51vsird091481der5g37u.apps.googleusercontent.com',
    androidClientId: '198119258557-586vgk1dbag6v252s3h8653r4ol44hot.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      if (authentication?.accessToken) {
        // eslint-disable-next-line no-inner-declarations
        async function getUser() {
          const responseUserData = await fetch(
            'https://www.googleapis.com/oauth2/v1/userinfo',
            { headers: { Authorization: `Bearer ${authentication!.accessToken}` } },
          );
          const userData = (await responseUserData.json()) as User;
          console.log('emailData = ', userData);
          return userData;
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getUser()
          .then((user) => {
            console.log('user = ', user);
            goHome(user);
          });
      }
    }
  }, [response, goHome]);

  const loading = Boolean(request);

  return {
    onPress: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      if (loading) promptAsync();
    },
  };
}
