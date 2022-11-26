import {
  StyleSheet, Image, ImageRequireSource,
} from 'react-native';
import ViewPager from 'react-native-pager-view';

import {
  Text, View, ButtonClearSecondary, SafeAreaView, Button,
} from '@ui';
import { RootStackScreenProps } from '@navigation/types';


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
    <SafeAreaView>
      <ViewPager style={styles.container}>
        {steps.map((step, index, array) => {
          const isLastStep = index === array.length - 1;

          return (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={styles.step}>
              <ButtonClearSecondary
                containerStyle={[styles.skipContainer, isLastStep && styles.skipContainerHide]}
                onPress={() => console.log('aaa = ')}
              >
                Пропустить
              </ButtonClearSecondary>
              <Image
                source={step.img}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.title}>{step.title}</Text>
              <Text>{step.text}</Text>
              <Button
                title={isLastStep ? 'Далее' : 'Начать'}
                containerStyle={styles.nextContainer}
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
  },
  step: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    flex: 1,
  },
  skipContainer: {
    position: 'relative',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 20,
  },
  skipContainerHide: {
    top: -100,
  },
  title: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
  nextContainer: {
    marginTop: 50,
    marginBottom: 25,
  },
});
