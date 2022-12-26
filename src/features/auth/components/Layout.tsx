import { ScrollView, ScreenLayout, ScreenLayoutProps } from '$ui';


export default function Layout({
  children, ...otherProps
}: ScreenLayoutProps) {
  return (
    <ScreenLayout {...otherProps}>
      <ScrollView>
        {children}
      </ScrollView>
    </ScreenLayout>
  );
}
