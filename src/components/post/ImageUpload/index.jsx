import React from 'react';
import * as S from './style';

function ImageUpload({ handleFileChange, handleImageDelete, src, imageLoadingLength }) {
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
            {src.map((imgPreview, i) => (
              <S.ImgPreviewList key={i} imgSize={src.length}>
                <S.Image src={imgPreview} alt='선택한 업로드 이미지' />
                <S.RemoveImgBtn type='button' onClick={() => handleImageDelete(i)}>
                  <span className='ir'>이미지 삭제</span>
                </S.RemoveImgBtn>
              </S.ImgPreviewList>
            ))}
            {imageLoadingLength > 0 && (
              <S.LoadingList imgSize={src.length}>
                <S.UploadingBox></S.UploadingBox>
              </S.LoadingList>
            )}
          </S.ImgPreview>
        </S.ImgPreviewBox>
      </S.ImageBox>
    </>
  );
}

export default ImageUpload;
