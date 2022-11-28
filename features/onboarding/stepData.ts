import { ImageRequireSource } from 'react-native';

/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const step1Img = require('./images/step_1.png') as ImageRequireSource;
const step2Img = require('./images/step_2.png') as ImageRequireSource;
const step3Img = require('./images/step_3.png') as ImageRequireSource;
/* eslint-enable @typescript-eslint/no-var-requires */
/* eslint-enable global-require */


export type Step = {
  title: string,
  text: string,
  img: ImageRequireSource,
};

export const steps: Step[] = [
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
