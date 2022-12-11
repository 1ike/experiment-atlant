import { useTheme } from '@rneui/themed';

import { ButtonClear, ButtonClearProps } from './Clear';


export type ButtonClearSecondaryProps = ButtonClearProps;

export function ButtonClearSecondary({ titleStyle, ...otherProps }: ButtonClearSecondaryProps) {
  const { theme } = useTheme();
  const titleColor = theme.colors.buttonClearSecondaryTitle;

  return (
    <ButtonClear
      {...otherProps}
      // eslint-disable-next-line react-native/no-inline-styles
      titleStyle={[{ color: titleColor, fontSize: 20 }, titleStyle]}
    />
  );
}
