import React from 'react';
import { useFavorite } from '../context/FavoritesContext';

const Favorite = () => {
  const { favorites, removeFromFavorite } = useFavorite();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Your Favorites Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-blue-500 text-whit flex items-center justify-center text-9xl leading-relaxed rounded-md shadow-inner font-extrabold mb-10">
          {favorites.length}
      </div>
      
        {favorites.map((book) => (
          <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={book.cover_img} alt={book.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-700">{book.author}</p>
            </div>
            <div className="p-4 bg-gray-100">
              <button
                onClick={() => removeFromFavorite(book.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
