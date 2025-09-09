import React from 'react';
import CountriesStatics from './CountriesStatics';
import { GeoProvider } from './Context';
import './countriesStatistic.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <GeoProvider>
        <CountriesStatics />
      </GeoProvider>
    </div>
  );
}

export default App;