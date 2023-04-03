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

export { categoryState, themeState };
