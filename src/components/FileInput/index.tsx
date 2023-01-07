import React from 'react';
import './style.scss';

const FileInput = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target?.result as string

      image.onload = () => {
        alert(`image height/width ${image.height}, ${image.width}`)
      }
    }
  }

  return (
    <div className="wrapper">
      <input type="file" accept='image/png, image/jpeg' onChange={handleChange} />
    </div>
  );
};

export default FileInput;
