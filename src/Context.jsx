import { createContext, useState } from 'react';

export const GeoContext = createContext();

export const GeoProvider = ({ children }) => {
  const [activeGeo, setActiveGeo] = useState('ind');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [searchQuery, setSearchQuery] = useState('india');

  const value = {
    activeGeo,
    setActiveGeo,
    showSuggestions,
    setShowSuggestions,
    index,
    setIndex,
    selected,
    setSelected,
    searchQuery,
    setSearchQuery
  };

  return (
    <GeoContext.Provider value={value}>
      {children}
    </GeoContext.Provider>
  );
};
