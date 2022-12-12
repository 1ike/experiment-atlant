import React, { useCallback } from 'react';
import { Alert, Linking } from 'react-native';

import { ButtonInText, ButtonInTextProps } from './InText';


export type ButtonOpenURLProps = ButtonInTextProps & {
  url: string,
};

export function ButtonOpenURL({
  url, buttonStyle, titleStyle, ...otherProps
}: ButtonOpenURLProps) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <ButtonInText
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={handlePress}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      {...otherProps}
    />
  );
}
