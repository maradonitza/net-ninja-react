import React, {Component} from 'react'; 
import {AuthContext} from '../contexts/AuthContext';

class BookList extends Component 
{ 
    static contextType = AuthContext;
    render() { 
        const {isAuthenticated, anotherProperty} = this.context;
        return (
            <div className='book-list'>
                {isAuthenticated? 'Logged in': 'Logged out'}
                <ul> 
                    <li>Three men in a boat</li> 
                    <li>Rumi's book of poetry</li> 
                    <li>{anotherProperty}</li> 
                </ul> 
            </div> 
        ); 
    } 
} 

export default BookList;