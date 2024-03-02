import { createContext, useContext, useState } from "react";


const FavoriteContext = createContext();

export const FavoriteProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (book) => {
        setFavorites([...favorites, book]);
    };

    const removeFromFavorite = (bookId) => {
        setFavorites(favorites.filter((book) => book.id !== bookId));

    };

    return (
        <FavoriteContext.Provider value={{favorites, addToFavorites, removeFromFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavorite = () => useContext(FavoriteContext);