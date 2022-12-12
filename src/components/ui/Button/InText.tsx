import { makeStyles } from '@rneui/themed';

import { ButtonClearSecondary, ButtonClearSecondaryProps } from './ClearSecondary';


export type ButtonInTextProps = ButtonClearSecondaryProps;

export function ButtonInText({
  buttonStyle, titleStyle, ...otherProps
}:ButtonInTextProps) {
  const styles = useStyles();

  return (
    <ButtonClearSecondary
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={[styles.title, titleStyle]}
      {...otherProps}
    />
  );
}


const useStyles = makeStyles((theme) => ({
  button: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  title: {
    paddingVertical: 0,
    color: theme.colors.textPrimary,
  },
}));
