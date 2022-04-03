import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid'

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'Lo que te conté mientras te hacias la dormida', id: 1},
        {title: 'Rosas', id: 2},
        {title: 'Las paz de tus ojos', id: 3}
    ]);

    const addSong=() => {
        setSongs([...songs, {title: 'Tu recuerdo', id: uuidv4()}])
    }
    return(
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return(
                        <li key={song.id}>{song.title}</li>
                    );
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
    );
}

export default SongList;