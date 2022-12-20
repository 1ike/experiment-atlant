import { StyleProp, ViewStyle, ImageRequireSource } from 'react-native';

import { makeStyles } from '@rneui/themed';
import { Text, View, Image } from '$ui';
import useGoogleSignIn from './hooks/useGoogleSignIn';


/* eslint-disable global-require, @typescript-eslint/no-var-requires */
const appleImg = require('./images/apple.png') as ImageRequireSource;
const googleImg = require('./images/google.png') as ImageRequireSource;
const vkImg = require('./images/vk.png') as ImageRequireSource;
/* eslint-enable global-require, @typescript-eslint/no-var-requires */


type SocialProps = { containerStyle?: StyleProp<ViewStyle> };

export default function Social({ containerStyle }: SocialProps) {
  const styles = useStyles();

  const google = useGoogleSignIn();


  type Data = {
    img: ImageRequireSource,
    onPress: () => void,
  };

  const data: Data[] = [
    {
      img: appleImg,
      onPress: google.onPress,
    },
    {
      img: googleImg,
      onPress: google.onPress,
    },
    {
      img: vkImg,
      onPress: google.onPress,
    },
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <View style={styles.headerSeparator} />

        <Text style={styles.headerText}>или войти с помощью</Text>
        <View style={styles.headerSeparator} />
      </View>
      <View style={styles.icons}>
        {data.map((social, i: React.Key) => (
          <Image
            source={social.img}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onPress={social.onPress}
            style={styles.icon}
          />
        ))}
      </View>
    </View>
  );
}

const iconDimension = 70;

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
    gap: 90,
  },
  icon: {
    height: iconDimension,
    width: iconDimension,
    marginHorizontal: 10,
  },
}));
