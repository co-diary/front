import { atom } from 'recoil';

const modalState = atom({
  key: 'modalState',
  default: {
    visible: false,
  },
});

export default modalState;
