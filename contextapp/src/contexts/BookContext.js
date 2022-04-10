import React, {createContext, useState} from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Corazon salvaje', id: 1},
        {title: 'Poetry by Rumy', id: 2},
        {title: 'Three men in a boat', id: 3}
    ]);
    return (  
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
