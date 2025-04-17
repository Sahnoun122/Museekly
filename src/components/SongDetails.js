import React, { useEffect, useState } from 'react';

function SongDetails({ song }) {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (song) {
      fetch(`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`)
        .then(res => res.json())
        .then(data => {
          setLyrics(data.lyrics || 'Paroles non trouvées.');
          setLoading(false);
        })
        .catch(() => {
          setLyrics('Erreur lors du chargement des paroles.');
          setLoading(false);
        });
    }
  }, [song]);

  if (!song) return null;

  return (
    <div className="song-details">
      <h2>{song.title}</h2>
      <h3>Artiste : {song.artist.name}</h3>
      <h4>Album : {song.album.title}</h4>
      {loading ? <p>Chargement des paroles...</p> : <pre>{lyrics}</pre>}
    </div>
  );
}

export default SongDetails;
