import { StyleProp, ViewStyle } from 'react-native';

import { makeStyles, SocialIcon, SocialMediaType } from '@rneui/themed';
import { Text, View, ButtonInline } from '$ui';


type SocialProps = { containerStyle?: StyleProp<ViewStyle> };

export default function Social({ containerStyle }: SocialProps) {
  const styles = useStyles();

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
            onPress={() => console.log('type = ', type)}
          />
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Еще нет аккаунта? </Text>
        <ButtonInline
          titleStyle={styles.footerEnterButtonTitle}
        >
          Зарегистрироваться!
        </ButtonInline>
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
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerText: {
    textAlign: 'center',
    fontSize: theme.fontSizeSmall,
    color: theme.colors.textSecondary,
  },
  footerEnterButtonTitle: {
    fontSize: theme.fontSizeSmall,
  },
}));
