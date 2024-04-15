import React, { useState } from "react";

function Post() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);

  function handleUploadImage(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setFile(file);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setFile(file);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-700">
      <div className="hero">
        <label htmlFor="input-file" className="drop-area">
          <input
            type="file"
            accept="jpeg, png, jpg"
            id="input-file"
            className="hidden"
            onChange={handleUploadImage}
          />
          <div
  className="bg-cover w-[370px] p-8 bg-white text-center rounded-[20px] mt-[-200px] cursor-pointer"
  style={{
    height: imageUrl ? 'full' : '340px', // Set height to 'auto' if imageUrl exists, otherwise set it to the default value (340px)
    backgroundImage: `url(${imageUrl})`,
    maxWidth: "100%", // Ensure the width stays constant
  }}
  onDragOver={handleDragOver}
  onDrop={handleDrop}
>
  {!imageUrl && (
    <span className="block text-sm text-gray-700 mt-3">&#43;</span>
  )}
</div>

          {/* <div className="header-search">
            <h1 className="text-left text-sm">Title</h1>
            <input
              type="text"
              className="search-input mt-2 w-80 px-3 py-1 border-2 border-black rounded-lg text-left"
              placeholder="Add Title"
            />
          </div> */}
        </label>



        {/* {file && (
          <div>
            <h2>Uploaded Image Preview:</h2>
            <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Post;
