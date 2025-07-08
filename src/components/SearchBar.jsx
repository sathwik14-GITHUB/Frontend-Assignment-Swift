import React from 'react';
import { CiSearch } from "react-icons/ci";
import './SearchBar.css';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-single">
      <CiSearch />
      <input
        className='input'
        type="text"
        placeholder="Search name, email, comment..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
