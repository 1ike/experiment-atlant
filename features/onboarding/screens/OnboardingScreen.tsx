import {
  StyleSheet, Button, Image, Pressable, ImageRequireSource,
} from 'react-native';
import ViewPager from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../../../components/ui';
import { RootStackScreenProps } from '../../../navigation/types';


const step1Img = require('../images/step_1.png') as ImageRequireSource;
const step2Img = require('../images/step_2.png') as ImageRequireSource;
const step3Img = require('../images/step_3.png') as ImageRequireSource;


type Step = {
  title: string,
  text: string,
  img: ImageRequireSource,
};

const steps: Step[] = [
  {
    title: 'Создавай задачи',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: step1Img,
  },
  {
    title: 'Управляй временем',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: step2Img,
  },
  {
    title: 'Отслеживай прогресс',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: step3Img,
  },
];

export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewPager style={styles.container}>
        {steps.map((step, index, array) => {
          const isLastStep = index === array.length - 1;

          return (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={styles.step}>
              <Pressable
                style={[styles.skipContainer, isLastStep && styles.skipContainerHide]}
                onPress={() => console.log('aaa = ')}
              >
                <Text style={styles.skipTitle}>Пропустить</Text>
              </Pressable>
              <Image
                source={step.img}
                resizeMode='contain'
                style={styles.img}
              />
              <Text style={styles.title}>{step.title}</Text>
              <Text>{step.text}</Text>
              <Button
                title={isLastStep ? 'Далее' : 'Начать'}
              />
            </View>
          );
        })}
      </ViewPager>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  step: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  skipContainer: {
    position: 'relative',
    marginTop: 20,
  },
  skipContainerHide: {
    top: -100,
  },
  skipTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
