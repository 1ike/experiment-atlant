import store from '../state/store';
import persist from './persist';
import fonts from './fonts';


export const beforeRendering = async () => {
  await persist(store);
  await fonts();
};

export const afterRendering = async () => {
};
