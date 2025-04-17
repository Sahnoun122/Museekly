import React, { useEffect, useState } from 'react';

function SongDetails({ song }) {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!song) return;

    const fetchLyrics = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`);
        const data = await res.json();
        setLyrics(data.lyrics || "Paroles non trouvées.");
      } catch {
        setLyrics("Erreur lors du chargement des paroles.");
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, [song]);

  if (!song) return null;

  return (
    <div className="song-details">
      <h2>{song.title}</h2>
      <h3>Artiste : {song.artist.name}</h3>
      <h4>Album : {song.album.title}</h4>
      <img src={song.album.cover_medium} alt="Album" />
      {loading ? <p>Chargement des paroles...</p> : <pre>{lyrics}</pre>}
    </div>
  );
}

export default SongDetails;
