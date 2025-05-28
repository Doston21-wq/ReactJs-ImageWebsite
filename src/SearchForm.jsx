import React from 'react'
import {FiSearch} from 'react-icons/fi'
const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
      const searchValue = e.target.elements.search.value
      if (!searchValue) return
      console.log(searchValue)
    }

  return (
    <div>
        <h1 className='title'>Unsplash Images</h1>
        <form className='search-form' onSubmit={handleSubmit}>
            <input type="search" name='search' placeholder='Search...'  className='form-input search-input'/>
            <button className='btn' type='submit'><FiSearch /></button>
        </form>
    </div>
  )
}

export default SearchForm