import React, {Component} from 'react'; 

class BookList extends Component 
{ 
    render() { 
        return (
            <div className='book-list'>
                <ul> 
                    <li>Three men in a boat</li> 
                    <li>Rumi's book of poetry</li> 
                </ul> 
            </div> 
        ); 
    } 
} 

export default BookList;