import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component
{
    render() {
        return(
            <ThemeContext.Consumer>{(context2) => {
                const { isLightTheme, light, dark } = context2;
                const theme = isLightTheme ? light : dark;
                return(
                    <div className='book-list' style = {{color: theme.syntax, background: theme.bg}}>
                        <ul>
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

export default BookList;