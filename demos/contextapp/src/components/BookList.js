import React, {Component, useContext} from 'react'; 
import {AuthContext} from '../contexts/AuthContext';

/*
class BookList extends Component 
{ 
    static contextType = AuthContext;
    render() { 
        const {isAuthenticated, anotherProperty} = this.context;
        return (
            <div className='book-list'>
                {isAuthenticated? 'Logged in': 'Logged out'} <br/>
                Book list: <br/>
                <ul> 
                    <li>Three men in a boat</li> 
                    <li>Rumi's book of poetry</li> 
                    <li>{anotherProperty}</li> 
                </ul> 
            </div> 
        ); 
    } 
} 
*/

const BookList = () => {
    const {isAuthenticated, anotherProperty} = useContext(AuthContext);
    return (
        <div className='book-list'>
                {isAuthenticated? 'Logged in': 'Logged out'} <br/>
                Book list: <br/>
                <ul> 
                    <li>Three men in a boat</li> 
                    <li>Rumi's book of poetry</li> 
                    <li>{anotherProperty}</li> 
                </ul> 
            </div> 
    );
}

export default BookList;