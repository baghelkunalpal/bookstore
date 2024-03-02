import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorite } from '../context/FavoritesContext';

const Book = (book) => {
    const {addToFavorites} = useFavorite();

    const handleAddToFavorites = () => {
        addToFavorites(book);
    }

  return (
    <div className='book-item flex flex-col justify-between shadow-lg hover:scale-105 duration-300 py-3 bg-gray-900'>
      <div className='book-item-img h-72 bg-white shadow-lg '>
        <img src={book.cover_img} alt="cover" className='w-full h-72 ' />
      </div>
      <div className='book-item-info text-center mt-4 mx-auto'>
        <Link to={{ pathname: `/book/${book.id}`, state: book }}>
          <div className='book-item-info-item title font-bold text-lg'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author text-sm '>
          <span className='font-bold text-uppercase'>Author:</span>
          <span>{Array.isArray(book.author) ? book.author.join(", ") : 'N/A'}</span>
        </div>

        <div className='book-item-info-item edition-count text-sm '>
          <span className='font-bold text-uppercase'>Total Editions:</span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year text-sm '>
          <span className='font-bold text-uppercase'>First Publish Year:</span>
          <span>{book.first_publish_year}</span>
        </div>
        <div className='book-item-info-item publish-year text-sm '>
          <span className='font-bold text-uppercase'>Id:</span>
          <span>{book.id}</span>
        </div>
       <button className='m-2 p-2 bg-blue-600 rounded-lg w-full font-semibold hover:bg-gray-600 duration-300'  onClick={handleAddToFavorites}>Add To Fav ❤️</button>
      </div>
    </div>
  );
};

export default Book;
