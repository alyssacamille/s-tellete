import React, { useState, useRef } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { IoAdd } from 'react-icons/io5';

const ImageUploader = () => {
  const [imgUrl, setImgUrl] = useState('');
  const inputFileRef = useRef(null);

  const handleUpload = (event) => {
    const input = event.target;
    const file = input.files[0];
    if (file) {
      previewImage(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      previewImage(file);
    }
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImgUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
   <div> 
   <div className="mb-4 mx-6 image-uploader object-contain h-[80%] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
  {/* Hidden input to trigger file selection */}
  <label htmlFor="myFile" className="h-full w-full bg-center bg-cover cursor-pointer relative">
    <input
      type="file"
      id="myFile"
      name="filename"
      ref={inputFileRef}
      onChange={handleUpload}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', height: '100%' }}
    />
    {imgUrl ? (
      <img src={imgUrl} alt="Uploaded" className="h-full w-full object-cover" />
    ) : (
      <div className="flex items-center justify-center w-full h-full">
        <IoAdd className="text-5xl text-gray-400" />
      </div>
    )}
  </label>
</div>



<form action="/action_page.php" className="max-w-md pl-6 pr-6 pb-6 bg-white rounded-lg ">
  <div className="mb-4">
    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
    <input type="text" id="title" name="title" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
  </div>
  <div className="mb-4 flex">
    <div className="w-1/2 mr-2">
      <label htmlFor="startPrice" className="block text-sm font-medium text-gray-700">Starting Price:</label>
      <div className="relative mt-1 flex items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700">₱</span>
        <input type="number" id="startPrice" name="startPrice" className="pl-7 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" min="0" step="1" />
      </div>
    </div>
    <div className="w-1/2 ml-2">
      <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Max Price:</label>
      <div className="relative mt-1 flex items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700">₱</span>
        <input type="number" id="maxPrice" name="maxPrice" className="pl-7 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" min="0" step="1" />
      </div>
    </div>
  </div>
  <div className="mb-4">
    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
    <textarea id="description" name="description" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"></textarea>
  </div>
  <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
</form>


</div>
  );
};

export default ImageUploader;
