import React, { useState } from "react";

const SearchBar = ({ categories, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-3 text-center">
      <input
        type="text"
        className="form-control w-50 mx-auto"
        placeholder="Search for an item..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
