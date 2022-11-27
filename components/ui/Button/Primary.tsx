import { makeStyles } from '@rneui/themed';

import { Button, ButtonProps } from '.';


export type ButtonPrimaryProps = ButtonProps;

export function ButtonPrimary({ containerStyle, buttonStyle, ...otherProps }: ButtonPrimaryProps) {
  const styles = useStyles();

  return (
    <Button
      {...otherProps}
      containerStyle={[styles.container, containerStyle]}
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={[styles.title, buttonStyle]}
    />
  );
}


const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  button: {
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.black,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
}));
