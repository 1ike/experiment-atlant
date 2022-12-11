import {
  makeStyles, Input as DefaultInput, InputProps as DefaultInputProps,
} from '@rneui/themed';


export type InputProps = DefaultInputProps;

export function Input({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  rightIconContainerStyle,
  ...otherProps
}: InputProps) {
  const styles = useStyles();

  return (
    <DefaultInput
      {...otherProps}
      containerStyle={[styles.container, containerStyle]}
      inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
      inputStyle={[styles.input, inputStyle]}
      rightIconContainerStyle={[styles.rightIconContainer, rightIconContainerStyle]}
    />
  );
}


const useStyles = makeStyles((theme) => ({
  container: {
    paddingHorizontal: 0,
  },
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.inputBackground,
    borderBottomWidth: 0,
    borderRadius: 5,
  },
  input: {
    fontSize: 20,
  },
  rightIconContainer: {
  },
}));
