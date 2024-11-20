// src/components/SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
    return (
        <input
            type="text"
            placeholder="Buscador..."
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search"
        />
    );
}

export default SearchBar;
