// import { getStorage, ref, uploadBytes } from 'firebase/storage';
import imageCompression from 'browser-image-compression';

import { useState } from 'react';

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

  return { handleFileChange, imagePreview, imageUpload };
};

export default useImageUpload;
