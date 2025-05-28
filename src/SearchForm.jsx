import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext(); // ✅ TO‘G‘RILANDI

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm; // ✅ TO‘G‘RILANDI
