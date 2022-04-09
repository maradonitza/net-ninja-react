import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid'
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'Lo que te conté mientras te hacias la dormida', id: 1},
        {title: 'Rosas', id: 2},
        {title: 'Las paz de tus ojos', id: 3}
    ]);

    const [height, setHeight] = useState(3600);
    const addSong=(title) => {
        setSongs([...songs, {title: title, id: uuidv4()}])
    }

    useEffect(()=> {
        console.log('useEffect hook ran', songs);
    }, [songs])

    useEffect(()=> {
        console.log('useEffect hook ran', height);
    }, [height])

    return(
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return(
                        <li key={song.id}>{song.title}</li>
                    );
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setHeight(height + 1)}>Increment height by 1: {height}</button>
        </div>
    );
}

export default SongList;