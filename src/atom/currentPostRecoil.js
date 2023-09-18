import { atom } from 'recoil';

export const currentPost = atom({
  key: 'currentPost',
  default: null,
});

export const currentTheme = atom({
  key: 'currentTheme',
  default: null,
});
