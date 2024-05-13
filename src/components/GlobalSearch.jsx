// GlobalSearch.jsx
import React, { useState } from 'react';

const GlobalSearch = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(term.toLowerCase()) ||
        product.artist.toLowerCase().includes(term.toLowerCase()) ||
        product.price.includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      className="rounded-lg p-2"
    />
  );
};

export default GlobalSearch;
