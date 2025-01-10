"use client";

import { useState } from "react";

type SearchProps = {
  placeholder: string;
  onSearch: (query: string) => void;
};

const normalizeString = (str: string) => str.toLowerCase().replace(/\s+/g, ""); // Lowercase and remove spaces

export const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const normalizedQuery = normalizeString(query);
    onSearch(normalizedQuery); // Pass the normalized query to the parent component
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};
