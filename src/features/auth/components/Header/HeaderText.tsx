import { StyleProp, ViewStyle } from 'react-native';
import { makeStyles } from '@rneui/themed';
import { Text, View } from '$ui';


type HeaderProps = {
  primaryText: string,
  secondaryText?: string,
  containerStyle?: StyleProp<ViewStyle>
};

export default function Header({
  primaryText, secondaryText, containerStyle,
}: HeaderProps) {
  const styles = useStyles();

  return (
    <View style={[!secondaryText && styles.withoutSecondary, containerStyle]}>
      <Text style={styles.primary}>{primaryText}</Text>
      {secondaryText && <Text style={styles.secondary}>{secondaryText}</Text>}
    </View>
  );
}


const useStyles = makeStyles((theme) => ({
  primary: {
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontSize: theme.fontSizeBigHeader,
    fontWeight: 'bold',
  },
  secondary: {
    alignSelf: 'flex-start',
    fontSize: theme.fontSizeMid,
  },
  withoutSecondary: {
    paddingBottom: 10,
  },
}));
