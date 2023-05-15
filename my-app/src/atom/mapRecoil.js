import { atom } from 'recoil';

const placeState = atom({
  key: 'placeState',
  default: {
    lat: 37.566381,
    lng: 126.977717,
    store: '',
    address: '',
    current: '',
  },
});

export default placeState;
