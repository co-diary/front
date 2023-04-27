import React from 'react';
import ImgLabelBtn from './style';

function ImageUpload() {
  return (
    <>
      <ImgLabelBtn htmlFor='img'></ImgLabelBtn>
      <input type='file' accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic' id='img' />
    </>
  );
}

export default ImageUpload;
