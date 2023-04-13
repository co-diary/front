import { atom } from 'recoil';

export const optionsState = atom({
  key: 'optionsState',
  default: ['최신순'],
});

export const cookiesState = atom({
  key: 'cookieState',
  default: [],
});
