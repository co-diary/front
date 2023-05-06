import React from 'react';
import useImageUpload from '../../../hooks/useImageUpload';
import * as S from './style';

function ImageUpload({ handleImageUpload }) {
  const { handleFileChange, imageUpload, handleImageDelete } = useImageUpload();

  handleImageUpload(imageUpload);

  return (
    <>
      <S.ImageBox>
        <h2 className='ir'>이미지</h2>
        <S.ImgLabelBtn htmlFor='img'></S.ImgLabelBtn>
        <input
          type='file'
          accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
          id='img'
          onChange={handleFileChange}
        />
        <S.ImgPreviewBox>
          <S.ImgPreview>
            {imageUpload.map((imgPreview, i) => (
              <S.ImgPreviewList key={i} imgSize={imageUpload.length}>
                <S.Image src={imgPreview} alt='선택한 업로드 이미지' />
                <S.RemoveImgBtn type='button' onClick={() => handleImageDelete(imgPreview)}>
                  <span className='ir'>이미지 삭제</span>
                </S.RemoveImgBtn>
              </S.ImgPreviewList>
            ))}
          </S.ImgPreview>
        </S.ImgPreviewBox>
      </S.ImageBox>
    </>
  );
}

export default ImageUpload;
