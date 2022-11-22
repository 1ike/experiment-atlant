import { StyleSheet } from 'react-native';
import ViewPager from 'react-native-pager-view';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/ui';
import { RootStackScreenProps } from '../navigation/types';


export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  return (
    <ViewPager style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
