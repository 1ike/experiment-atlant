import { StyleProp, ViewStyle } from 'react-native';

import { makeStyles, SocialIcon, SocialMediaType } from '@rneui/themed';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { Text, View } from '$ui';


type SocialProps = { containerStyle?: StyleProp<ViewStyle> };

export default function Social({ containerStyle }: SocialProps) {
  const styles = useStyles();

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
          const userData = (await responseUserData.json()) as { email: string, name: string };
          console.log('emailData = ', userData);
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getUser();
      }
    }
  }, [response]);


  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <View style={styles.headerSeparator} />

        <Text style={styles.headerText}>или войти с помощью</Text>
        <View style={styles.headerSeparator} />
      </View>
      <View style={styles.icons}>
        {['apple', 'google', 'vk'].map((type: SocialMediaType, i: React.Key) => (
          <SocialIcon
            type={type}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onPress={() => promptAsync()}
            disabled={!request}
          />
        ))}
      </View>
    </View>
  );
}


const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSeparator: {
    height: 2,
    flex: 1,
    backgroundColor: theme.colors.disabled,
  },
  headerText: {
    marginHorizontal: 35,
    fontSize: theme.fontSizeMid,
    color: theme.colors.textSecondary,
  },
  icons: {
    flexDirection: 'row',
    marginVertical: 45,
  },
}));
