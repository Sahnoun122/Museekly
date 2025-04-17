import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

function App() {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (term) => {
    setError('');
    setSelectedSong(null);

    try {
      const res = await fetch(`https://api.lyrics.ovh/suggest/${term}`);
      const data = await res.json();
      setSongs(data.data);
    } catch {
      setError("Erreur lors de la recherche.");
    }
  };

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="app">
      <h1>🎵 Lyrics & Player</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <SongList songs={songs} onSelect={handleSelectSong} />
      <SongDetails song={selectedSong} />
    </div>
  );
}

export default App;
