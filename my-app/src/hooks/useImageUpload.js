// import { getStorage, ref, uploadBytes } from 'firebase/storage';
import imageCompression from 'browser-image-compression';

import { useCallback, useState } from 'react';

const useImageUpload = () => {
  const [imagePreview, setImagePreview] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);

  const handleFileChange = async (e) => {
    const file = e.target?.files[0];

    const options = {
      masSizeMb: 0.2,
      maxWidthOrHeight: 1080,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      const image = window.URL.createObjectURL(compressedFile);

      setImagePreview([...imagePreview, image]);
      window.URL.revokeObjectURL((prev) => [...prev, image]);
      setImageUpload([...imageUpload, compressedFile]);
    } catch (error) {
      console.log('[ErrorMsg]', error);
    }
  };

  const handleImageDelete = useCallback(
    (imageIndex) => {
      console.log(imageIndex);
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
