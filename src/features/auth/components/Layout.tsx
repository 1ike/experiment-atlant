import { PropsWithChildren } from 'react';
import { ScrollView, ScreenLayout } from '$ui';


export default function Layout({
  children,
}: PropsWithChildren) {
  return (
    <ScreenLayout>
      <ScrollView>
        {children}
      </ScrollView>
    </ScreenLayout>
  );
}
