
  import React, { useState } from 'react';

  // import '../styles/Search.css'
  import { IoSearch } from "react-icons/io5";

  export default function SearchInput({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
      handleSearch(term); // Pass the search term to the parent component for filtering
    };
    


    return (
      <div className="">
        <div className="flex items-center text-center gap-2 justify-center overflow-hidden w-[100%] default-round p-3" style={{ background: 'var(--sub-color)' }}>
          <IoSearch className="align-middle h-6 w-6" />
          {/* Use the handleChange function for the onChange event */}
          <input 
          className="bg-transparent w-full outline-none" 
          type="text"
        placeholder="Search Products"
        onChange={handleChange} // Use handleChange function for filtering

          />
        </div>
      </div>
    );
  }