import { atom } from 'recoil';

const authState = atom({
  key: 'authState',
  default: null,
  dangerouslyAllowMutability: true,
});

const isAuthReady = atom({
  key: 'isAuthReady',
  default: false,
});

const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: null,
});

const UserIdState = atom({
  key: 'userId',
  default: '',
});

export { authState, isAuthReady, isLoggedIn, UserIdState };
