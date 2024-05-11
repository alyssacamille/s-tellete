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
    <div>
      <div className="image-uploader object-contain h-[80%] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        {/* Hidden input to trigger file selection */}
        <input
          type="file"
          id="myFile"
          name="filename"
          ref={inputFileRef}
          onChange={handleUpload}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ display: 'none' }}
        />
        {/* Decorate button and drag area */}
        <label htmlFor="myFile" className=' m-[8em] h-30 bg-center bg-cover cursor-pointer' onDrop={handleDrop} onDragOver={handleDragOver}>
          {imgUrl ? (
            <img src={imgUrl} alt="Uploaded" className="h-full w-full object-cover" />
          ) : (
            '+'
          )}
        </label>
      </div>
  
      {/* Additional content */}
      <div>
      <form action="/action_page.php" className="max-w-md mx-auto bg-white mt-3 rounded-lg ">
  <div className="mb-4">
    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name:</label>
    <input type="text" id="fname" name="fname" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name:</label>
    <input type="text" id="lname" name="lname" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
  </div>
  <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
</form>


      </div>
    </div>
  );
};

export default ImageUploader;
