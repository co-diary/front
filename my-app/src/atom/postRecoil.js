import { atom } from 'recoil';

const currentPost = atom({
  key: 'currentPost',
  default: {
    postId: 'WzEEWBftbhIckg6AFkcd',
    uid: 'zOS6kjMQE2V7V69Q2akcS7XIbS32',
    like: false,
    category: '커피',
    date: '2023년 4월 4일 오후 2시 19분 0초 UTC+9',
    menu: '아이스 슈크림라떼',
    score: 4,
    review: '달달고리하니 맛있음, 위에 올라가는 휘핑 크림도 넘맛탱 :)',
    price: 6300,
    theme: '음료',
    shop: '스타벅스 송파나루역DT점',
    location: '서울 송파구 오금로 142',
    tag: ['넘맛탱', '달달고리'],
  },
});

export default currentPost;
