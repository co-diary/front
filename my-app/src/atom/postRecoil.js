import { atom } from 'recoil';

const currentPost = atom({
  key: 'currentPost',
  default: {
    postId: 'WzEEWBftbhIckg6AFkcd',
    uid: 'zOS6kjMQE2V7V69Q2akcS7XIbS32',
    like: false,
    category: '커피',
    menu: '아이스 슈크림라떼',
    score: 4,
    review: '달달고리하니 맛있음, 위에 올라가는 휘핑 크림도 넘맛탱 :)',
    price: 6300,
    theme: '음료',
    shop: '스타벅스 송파나루역DT점',
    location: '서울 송파구 오금로 142',
    tag: ['넘맛탱', '달달고리'],
    photo: [
      'https://sitem.ssgcdn.com/13/68/49/item/1000301496813_i1_1100.jpg',
      'https://mblogthumb-phinf.pstatic.net/MjAxODA1MTFfMjU5/MDAxNTI2MDI1MjU1ODI2.ATNs0WiBEYbjHmikkWBNzYGv9qztpg8ZSBsrVIlM7OIg.sM5QnJ2Dv7Y_7M1IgO0y5eZM9jdReIzm64YLysWfhrsg.JPEG.yuki5619/P1500349.JPG?type=w2',
      'https://sitem.ssgcdn.com/13/68/49/item/1000301496813_i1_1100.jpg',
    ],
  },
});

// const currentPost = atom({
//   key: 'currentPost',
//   default: [],
// });

export default currentPost;
