import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hashtag from '../pages/Hashtag';
import HashtagResult from '../pages/Hashtag/HashtagResult';
import Home from '../pages/Home';
import LikePosts from '../pages/LikePosts/';
import Login from '../pages/Login';
import Location from '../pages/Location';
import MyPage from '../pages/MyPage';
import ProfileEdit from '../pages/MyPage/ProfileEdit';
import NotFound from '../pages/NotFound/NotFound';
import Post from '../pages/Post';
import PostDetail from '../pages/Post/PostDetail';
import PostEdit from '../pages/Post/PostEdit/PostEdit';
import PostUpload from '../pages/Post/PostUpload';
import Search from '../pages/Search';
import SignUp from '../pages/SignUp';
import Splash from '../pages/Splash/Splash';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/splash' element={<Splash />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/location' element={<Location />} />
        <Route path='/post' element={<Post />} />
        <Route path='/post/:id' element={<PostDetail />} />
        <Route path='/post/edit' element={<PostEdit />} />
        <Route path='/upload' element={<PostUpload />} />
        <Route path='/likeposts' element={<LikePosts />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/profile/:userId/edit' element={<ProfileEdit />} />
        <Route path='/hashtag' element={<Hashtag />} />
        <Route path='/hashtag/keyword' element={<HashtagResult />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
