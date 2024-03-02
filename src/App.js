// App.js
import React from 'react';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
// import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import { AppProvider } from './context';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Favorite from './components/Favorite';
import { FavoriteProvider } from './context/FavoritesContext';


const App = () => {
  return (
    <div>
      <AppProvider>
        <Router>
        <FavoriteProvider>
          <Header/>
          <Routes>  
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        </FavoriteProvider>

        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
