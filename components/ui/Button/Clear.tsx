import { Button, ButtonProps } from '.';


export type ButtonClearProps = ButtonProps;

export function ButtonClear(props: ButtonClearProps) {
  return (
    <Button {...props} type="clear" />
  );
}
