import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

import { User } from '~/features/auth/state/auth';
import useGoHome from './useGoHome';
import { vkAppId, scheme, easProjectId } from '~/config';

WebBrowser.maybeCompleteAuthSession();

export default function useVKSignIn() {
  const goHome = useGoHome();

  const authHandler = async () => {
    const redirectUrl = `${scheme}://expo-development-client/?url=https://u.expo.dev/${easProjectId}`;
    // const redirectUrl = AuthSession.makeRedirectUri();
    console.log(redirectUrl);
    const response = await AuthSession.startAsync({
      authUrl:
        'https://oauth.vk.com/authorize?'
        + `client_id=${vkAppId}&`
        + 'display=mobile&'
        // + `redirect_uri=${''}&`
        + `redirect_uri=${encodeURIComponent(redirectUrl)}&`
        + 'response_type=token&',
      // + 'v=5.92',
    });

    if (response.type === 'error') {
      console.error(response.error);
      return;
    }


    if (response?.type === 'success') {
      const accessToken = response.params.access_token;

      if (accessToken) {
        // eslint-disable-next-line no-inner-declarations
        async function getUser() {
          const responseUserData = await fetch(
            'https://api.vk.com/method/users.get?'
            + `access_token=${accessToken}&`
            + 'fields=bdate&'
            + 'v=5.131',
          );
          const userData = (await responseUserData.json()) as User;

          return userData;
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getUser()
          .then((user) => {
            goHome(user);
          }).catch((error) => console.error(error));
      }
    }
  };


  return {
    onPress: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      authHandler();
    },
  };
}
