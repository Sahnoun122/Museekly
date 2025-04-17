import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Entrez un titre ou un artiste"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchBar;
