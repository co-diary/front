import { atom } from 'recoil';

const inputValidState = atom({
  key: 'inputValidState',
  default: {
    dateValid: false,
    menuNameValid: false,
    menuPriceValid: false,
    ratingValid: false,
    storeValid: false,
    addressValid: false,
  },
});

const tagListState = atom({
  key: 'tagListState',
  default: [],
});

export { inputValidState, tagListState };
