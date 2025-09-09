import { useContext } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import mapdata from './featues.json';
import { GeoContext } from './Context';

export default function Map() {
  const { activeGeo, handleClickMap } = useContext(GeoContext);

  const activeStyle = {
    default: { outline: 'none', stroke: '#475569', strokeWidth: 0.8 },
    hover: { outline: 'none', stroke: '#475569', strokeWidth: 0.8 },
    pressed: { outline: 'none', stroke: '#475569', strokeWidth: 0.8 }
  };
  const defaultStyle = {
    default: { outline: 'none', stroke: '#64748b', strokeWidth: 0.5 },
    hover: { outline: 'none', fill: '#16a34a', stroke: '#475569', strokeWidth: 0.8 },
    pressed: { outline: 'none', stroke: '#64748b', strokeWidth: 0.5 }
  };

  return (
    <>
      <div className="w-full xl:w-[60%] ">
        <ComposableMap height={550} width={800}>
          <Geographies geography={mapdata}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    fill={
                      activeGeo.toLowerCase() === geo.id.toLowerCase() ? '#14532d' : '#4ade80'
                    }
                    geography={geo}
                    key={geo.rsmKey}
                    style={activeGeo === geo.id.toLowerCase() ? activeStyle : defaultStyle}
                    tabIndex="-1"
                    onClick={() => handleClickMap(geo)}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </>
  );
}
