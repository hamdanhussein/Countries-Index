import React from 'react';

const PlayHeader = ({ play }) => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#152955',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    }}>
      <h1 style={{ margin: '0 0 10px 0', color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Countries Statistics</h1>
      <p style={{ margin: '0', color: 'rgba(255, 255, 255, 0.9)' }}>Fetch country demographics with a single click on the map</p>
    </div>
  );
};

export default PlayHeader;