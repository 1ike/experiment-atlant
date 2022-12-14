import { FieldValues } from 'react-hook-form/dist/types';
import { useState } from 'react';
import { ImageRequireSource } from 'react-native';

import { Image } from '../../../Image';
import { TextInput, TextInputProps } from '../TextInput';


/* eslint-disable @typescript-eslint/no-var-requires, global-require */
const passwordHiddenImg = require('./images/passwordHide.png') as ImageRequireSource;
const passwordShownImg = require('./images/passwordShow.png') as ImageRequireSource;
/* eslint-enable @typescript-eslint/no-var-requires, global-require */

const chooseImage = (hidden: boolean, setPasswordVisibility: (hidden: boolean) => void) => {
  const dimension = 23;
  return (
    <Image
      style={{ height: dimension, width: dimension }}
      source={hidden ? passwordShownImg : passwordHiddenImg}
      onPress={() => setPasswordVisibility(!hidden)}
    />
  );
};


type TextInputPasswordProps<V extends FieldValues> = {
  password?: boolean,
} & TextInputProps<V>;

export function TextInputPassword<V extends FieldValues>(props: TextInputPasswordProps<V>) {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <TextInput
      secureTextEntry={passwordHidden}
      rightIcon={chooseImage(passwordHidden, setPasswordHidden)}
      textContentType="password"
      {...props}
    />
  );
}
