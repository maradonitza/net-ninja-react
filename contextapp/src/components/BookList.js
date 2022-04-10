import React, {Component, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

/*
class BookList extends Component
{
    render() {
        return(
            <ThemeContext.Consumer>{(context2) => {
                const { isLightTheme, light, dark } = context2;
                const { books } = useContext(BookContext);
                const theme = isLightTheme ? light : dark;
                return(
                    <div className='book-list' style = {{color: theme.syntax, background: theme.bg}}>
                        <ul>
                            {books.map(book => {
                                return(
                                <li>{book.title}</li>
                                );
                            })}
                            <li>the way of kings</li>
                            <li>the name of the wind </li>
                            <li>the way of kings</li>
                        </ul> 
                    </div>             
                );
            }}
            </ThemeContext.Consumer>
        );
    }
}
*/

const BookList = () => {
    const { books } = useContext(BookContext);        
    return (
        
        <ThemeContext.Consumer>{(context2) => {
            const { isLightTheme, light, dark } = context2;
            const theme = isLightTheme ? light : dark;
            return(
                <div className='book-list' style = {{color: theme.syntax, background: theme.bg}}>
                    <ul>
                        {books.map(book => {
                            return(
                            <li key={book.id}>{book.title}</li>
                            );
                        })}
                    </ul> 
                </div>             
            );
        }}
        </ThemeContext.Consumer>          
    );
}
 
export default BookList;