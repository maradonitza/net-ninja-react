import React, {Component} from 'react'; 
import { LanguageContext } from '../contexts/LanguageContext';

class MovieList extends Component 
{ 
    render() { 
        return (
            <LanguageContext.Consumer>{(context) => {
                const {preferredLanguage, writtenLanguage} = context;
                return(
                    <div className='movie-list'>
                        Movie list:
                        <ul> 
                            <li>Corazon Salvaje</li> 
                            <li>El misterio del Trinidad</li> 
                            <li>Crónica de un desayuno</li>
                        </ul> 
                        Page written in: 
                        <br />
                        {preferredLanguage}
                    </div> 
                );
            }}
            </LanguageContext.Consumer>
            
        ); 
    } 
} 

export default MovieList;