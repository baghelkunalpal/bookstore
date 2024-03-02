import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loader.';
import coverImg from '../images/cover_not_found.jpg';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";
console.log(URL)

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description ? description.value : 'No description found',
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(', ') : 'No subject places found',
            subject_times: subject_times ? subject_times.join(', ') : 'No subject times found',
            subjects: subjects ? subjects.join(', ') : 'No subjects found',
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className='book-details bg-zinc-900 text-white'>
      <div className='container'>
        <button
          type='button'
          className='flex flex-c back-btn bg-gray-700 p-2 m-2 cursor-pointer gap-2 rounded-md'
          onClick={() => navigate('/book')}
        >
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-8 ml-4'>
          <div className='book-details-img'>
            <img
              src={book?.cover_img}
              alt='cover img'
              className='w-full h-auto rounded-lg'
            />
          </div>
          <div className='book-details-info'>
            <div className='title mb-4'>
              <span className='text-2xl font-semibold'>{book?.title}</span>
            </div>
            <div className='description mb-4'>
              <span>{book?.description}</span>
            </div>
            <div className='mb-2'>
              <span className='font-semibold'>Subject Places: </span>
              <span className='italic'>{book?.subject_places}</span>
            </div>
            <div className='mb-2'>
              <span className='font-semibold'>Subject Times: </span>
              <span className='italic'>{book?.subject_times}</span>
            </div>
            <div className='mb-2'>
              <span className='font-semibold'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
