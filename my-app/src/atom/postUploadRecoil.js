import { atom } from 'recoil';
import SELECTBOX_DATA from '../components/post/CategorySelectBox/SELECTBOX_DATA';

const categoryState = atom({
  key: 'categoryState',
  default: SELECTBOX_DATA[0].name,
});

const themeState = atom({
  key: 'themeState',
  default: SELECTBOX_DATA[0].option[0].subName,
});

const dateState = atom({
  key: 'dateState',
  default: null,
});

const menuNameState = atom({
  key: 'menuNameState',
  default: '',
});

const menuPriceState = atom({
  key: 'menuPriceState',
  default: '',
});

const starRatingState = atom({
  key: 'starRatingState',
  default: 0,
});

const reviewState = atom({
  key: 'reviewState',
  default: '',
});

const tagListState = atom({
  key: 'tagListState',
  default: [],
});

const imageListState = atom({
  key: 'imageListState',
  default: [],
});

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

const imageDeleteState = atom({
  key: 'imageDeleteState',
  default: [],
});

export {
  categoryState,
  themeState,
  dateState,
  menuNameState,
  menuPriceState,
  starRatingState,
  reviewState,
  tagListState,
  imageListState,
  inputValidState,
  imageDeleteState,
};
