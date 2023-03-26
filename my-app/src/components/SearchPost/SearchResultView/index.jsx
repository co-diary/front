import React, { useState, useEffect } from 'react';
import PostCard from '../../post/PostCard';
import getPost from '../../../hooks/getPost';

function SearchResultView({ keyword }) {
  const [post, setPost] = useState([]);

  console.log(keyword);
  console.log(getPost);

  useEffect(() => {
    getPost('ALL').then((data) => {
      const filtered = data.filter((item) => item.menu.includes(keyword));

      setPost(filtered);
    });
  }, []);

  console.log(post);

  return (
    <>
      View
      {/* <PostCard /> */}
    </>
  );
}

export default SearchResultView;
