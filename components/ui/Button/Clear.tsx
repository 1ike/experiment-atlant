import { Button as RNEButton, ButtonProps } from '@rneui/themed';


export type ButtonClearProps = React.PropsWithChildren<ButtonProps>;

export function ButtonClear(props: ButtonClearProps) {
  return (
    <RNEButton {...props} type="clear" />
  );
}
