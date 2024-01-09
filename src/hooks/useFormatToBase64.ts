import { useState } from 'react';

function readB64Img(
    file: File,
    cb: (prop: string | ArrayBuffer | null) => void
  ) {
    var reader = new FileReader();

    reader.onloadend = () => {
      cb(reader.result);
    };

    reader.readAsDataURL(file);
    // Convert to base64
  }


const useFormatBase64 = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageSelected, setImageSelected] = useState("");

  readB64Img(image as File, (base64) => setImageSelected(`${base64}`))

  return {
    setImage, // onChange
    imageSelected // Base64 
  }

}

export default useFormatBase64