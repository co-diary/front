import { atom } from 'recoil';

const currentPost = atom({
  key: 'currentPost',
  default: null,
});

export default currentPost;
