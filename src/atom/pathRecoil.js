import { atom } from 'recoil';

const currentPath = atom({
  key: 'currentPath',
  default: null,
});

export default currentPath;
