import { useCallback, useEffect, useState } from 'react';
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import imageCompression from 'browser-image-compression';
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../firebase';
import { authState } from '../atom/authRecoil';

const useImageUpload = () => {
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

    const options = {
      masSizeMb: 0.02,
      maxWidthOrHeight: 1080,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const encordingFile = new File([compressedFile], file.name, { type: file.type });
      const image = window.URL.createObjectURL(compressedFile);

      window.URL.revokeObjectURL((prev) => [...prev, image]);
      setImageUpload([...imageUpload, { url: encordingFile, isUploading: true }]);

      const imageRef = await ref(storage, `${userAuth?.uid}/${uuidv4()}`);

      if (!imageRef) return;

      await uploadBytes(imageRef, encordingFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((getUrl) => {
          setImageUpload([...imageUpload, { url: getUrl, isUploading: false }]);
        });
      });
    } catch (error) {
      console.log('[ErrorMsg]', error);
    }
  };

  useEffect(() => {
    handleFileChange();
  }, [imageUpload]);

  const handleImageDelete = useCallback(
    async (imageSelect) => {
      const deleteRef = await ref(storage, imageSelect);

      await deleteObject(deleteRef)
        .then(() => {
          const imageLeaveList = imageUpload.filter((updateUrl) => updateUrl.url !== imageSelect);

          setImageUpload(imageLeaveList);
        })
        .catch((error) => {
          console.log('[ErrorMsg]', error);
        });
    },
    [imageUpload],
  );

  return { handleFileChange, imageUpload, handleImageDelete };
};

export default useImageUpload;
