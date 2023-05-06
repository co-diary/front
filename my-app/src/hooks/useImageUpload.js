import { useCallback, useEffect, useState } from 'react';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import imageCompression from 'browser-image-compression';
import { useRecoilValue } from 'recoil';
// import { v4 as uuidv4 } from 'uuid';
import { storage } from '../firebase';
import { authState } from '../atom/authRecoil';

const useImageUpload = () => {
  const [imagePreview, setImagePreview] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);
  const userAuth = useRecoilValue(authState);

  const handleFileChange = async (e) => {
    if (!e) return;

    const file = e.target?.files[0];

    if (!file) return;
    if (imageUpload.length > 2) {
      alert('이미지는 3장까지 등록할 수 있습니다.');
      return;
    }

    console.log('original:', file);

    const options = {
      masSizeMb: 0.02,
      maxWidthOrHeight: 1080,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      const encordingFile = new File([compressedFile], file.name, { type: file.type });

      const image = window.URL.createObjectURL(compressedFile);

      console.log('resizing complete: ', encordingFile);

      setImagePreview([...imagePreview, image]);
      window.URL.revokeObjectURL((prev) => [...prev, image]);
      setImageUpload([...imageUpload, encordingFile]);

      const imageRef = await ref(storage, `${userAuth?.uid}/${file.name}`);

      if (!imageRef) return;

      await uploadBytes(imageRef, encordingFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUpload([...imageUpload, url]);
        });
      });

      console.log('리사이징타입:', typeof encordingFile, '상태값:', typeof imageUpload);
    } catch (error) {
      console.log('[ErrorMsg]', error);
    }
  };

  useEffect(() => {
    handleFileChange();
  }, [imageUpload]);

  const handleImageDelete = useCallback(
    async (imageIndex) => {
      const imageLeaveListPreview = imagePreview.filter((_, i) => imageIndex !== i);
      const imageLeaveList = imageUpload.filter((_, i) => imageIndex !== i);

      setImagePreview(imageLeaveListPreview);
      setImageUpload(imageLeaveList);
    },
    [imagePreview],
  );

  return { handleFileChange, imagePreview, imageUpload, handleImageDelete };
};

export default useImageUpload;
