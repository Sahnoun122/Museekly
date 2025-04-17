import React from 'react';

function SongList({ songs, onSelectSong }) {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <div key={index} className="song-item" onClick={() => onSelectSong(song)}>
          <p><strong>{song.artist.name}</strong> - {song.title}</p>
        </div>
      ))}
    </div>
  );
}

export default SongList;
