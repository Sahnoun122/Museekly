import React from 'react';

function SongList({ songs, onSelect }) {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <div key={index} className="song-item" onClick={() => onSelect(song)}>
          <img src={song.album.cover_small} alt="album cover" />
          <div className="song-info">
            <p><strong>{song.title}</strong></p>
            <p>{song.artist.name} - {song.album.title}</p>
          </div>
          <audio controls src={song.preview}>
            Votre navigateur ne supporte pas l'audio.
          </audio>
        </div>
      ))}
    </div>
  );
}

export default SongList;
