import { atom } from 'recoil';

const authState = atom({
  key: 'authState',
  default: null,
  dangerouslyAllowMutability: true,
});

const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: false,
});

export { authState, isLoggedIn };
