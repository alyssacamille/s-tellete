import React from 'react';
import { IoAddCircle } from "react-icons/io5";

const ImageUploader = () => {
  const previewImage = (event) => {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = () => {
      const preview = document.getElementById('preview');
      const img = document.createElement('img');
      img.src = reader.result;
      preview.innerHTML = '';
      preview.appendChild(img);
    };

    reader.readAsDataURL(input.files[0]);
  };

  const loadFile = (event) => {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <div> <div>
    <input 
    className=''
    type="file" id="myFile" name="filename" onChange={previewImage} style={{ display: 'none' }} />
      <label htmlFor="myFile"  >
      {/* className=" text-4xl" */}
        <button className='bg-black p-2 default-round text-white ' bold>decorate</button>
      </label>
      
    </div>
    </div>
  );
};

export default ImageUploader;
