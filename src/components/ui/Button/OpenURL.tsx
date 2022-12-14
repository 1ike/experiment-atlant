import { ButtonInline, ButtonInlineProps } from './Inline';
import { useOpenURL } from '../hooks/useOpenUrl';


export type ButtonOpenURLProps = ButtonInlineProps & {
  url: string,
};

export function ButtonOpenURL({
  url, buttonStyle, titleStyle, ...otherProps
}: ButtonOpenURLProps) {
  const handlePress = useOpenURL(url);

  return (
    <ButtonInline
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={handlePress}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      {...otherProps}
    />
  );
}
