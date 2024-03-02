import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value;
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('the lost world');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate('/book');
  };

  return (
    <div className="search-form h-[500px]">
      <div className="container mx-auto">
        <div className="search-form-content">
        <form className="search-form" onSubmit={handleSubmit}>
  <div className="search-form-elem flex items-center bg-white rounded-lg overflow-hidden shadow-md w-96">
    <input
      type="text"
      className="form-input py-3 px-4 w-full focus:outline-none text-black"
      placeholder="Search for books..."
      ref={searchText}
    />
    <button
      type="submit"
      className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 focus:outline-none"
    >
      <FaSearch className="text-purple" size={24} />
    </button>
  </div>
</form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
