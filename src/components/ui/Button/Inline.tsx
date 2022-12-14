import { makeStyles } from '@rneui/themed';

import { ButtonClearSecondary, ButtonClearSecondaryProps } from './ClearSecondary';


export type ButtonInlineProps = ButtonClearSecondaryProps;

export function ButtonInline({
  buttonStyle, titleStyle, ...otherProps
}:ButtonInlineProps) {
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
