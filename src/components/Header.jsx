import React from 'react';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
// import './Header.css'; // Make sure to import your CSS file

// Assuming that the image is in the 'images' folder and the 'library-img.jpg' file exists
import backgroundImage from '../images/library-img.jpg'

const Header = () => {
  return (
    <div>
      <header
        className="bg-gradient-to-b"
        style={{
          backgroundImage: `linear-gradient(rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5)), url(${backgroundImage})`,
          backgroundPosition: 'center top', 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }
    }
      >
        <Navbar />
        <div className="header-content flex flex-col items-center justify-center text-white py-12">
          <h2 className="header-title text-3xl md:text-4xl lg:text-5xl uppercase font-bold mb-4 text-center">
            Find your book of choice.
          </h2>
          <p className="header-text text-lg lg:text-xl font-light mb-6 text-center max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
