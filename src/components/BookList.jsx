import React from 'react';
import { useGlobalContext } from '../context';
import Book from "./Book";
import Loading from './Loader.';
import coverImg from "../images/cover_not_found.jpg";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => ({
    ...singleBook,
    // removing /works/ to get only id
    id: singleBook.id.replace("/works/", ""),
    cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
  }));

  if (loading) return <Loading />;

  return (
    <section className='booklist bg-zinc-900 text-white'>
      <div className='container mx-auto'>
        <div className='section-title text-center mb-8'>
          <h2 className='text-3xl font-semibold'>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {booksWithCovers.slice(0, 40).map((item) => (
            <Book key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;
