import React, { useCallback, useEffect, useState } from 'react';

export default function Country({ activeGeo }) {
  const [country, setCountry] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  const getCountry = useCallback((activeGeoVal) => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/alpha/${activeGeoVal}`)
      .then((response) => {
        if (!response.ok) {
          throw Error('Something went wrong');
        }

        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setErrorInfo(null);
        setCountry(data[0]);
      })
      .catch((e) => {
        setIsLoading(false);
        setCountry();
        setErrorInfo(e.message);
      });
  }, []);
  useEffect(() => {
    getCountry(activeGeo);
  }, [activeGeo, getCountry]);

  return (
    <div className="w-[100%] xl:w-[40%] my-8">
      {errorInfo && (
        <h1 className="my-12  text-center text-xl md:text-3xl font-bold text-red-300">
          {errorInfo}
        </h1>
      )}
      {isloading ? (
        <h1 className="my-12  text-center text-xl md:text-3xl font-bold text-cyan-800">
          Loading....
        </h1>
      ) : (
        country && (
          <div className="w-[100%] mx-auto">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-center uppercase">
                {country.name.common}
              </h1>
              <div className="md:flex md:w-[70%] md:mx-auto  xl:block">
                <img
                  alt="country-flag"
                  className="w-[350px] h-[200px] my-2 mx-auto md:mt-6"
                  src={country.flags.png}
                />
                <div className="country-facts-container">
                  <div className="country-fact-card">
                    <div className="fact-label">Capital</div>
                    <div className="fact-value">{country.capital[0]}</div>
                  </div>
                  
                  <div className="country-fact-card">
                    <div className="fact-label">Currency</div>
                    <div className="fact-value">
                      {Object.keys(country.currencies).map((currency, index) => {
                        return (
                          <div key={index} className="currency-item">
                            <span className="currency-symbol">
                              {country.currencies[currency].symbol}
                            </span>
                            <span className="currency-code">{currency}</span>
                            <div className="currency-name">{country.currencies[currency].name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="country-fact-card">
                    <div className="fact-label">Population</div>
                    <div className="fact-value population">{country.population.toLocaleString()}</div>
                  </div>
                  
                  <div className="country-fact-card">
                    <div className="fact-label">Coordinates</div>
                    <div className="fact-value coordinates">
                      {country.latlng.map((item, index) => {
                        return <span key={index}>{item}{index === 0 ? '°N, ' : '°E'}</span>;
                      })}
                    </div>
                  </div>
                  
                  <div className="country-fact-card languages-card">
                    <div className="fact-label">Languages</div>
                    <div className="fact-value languages">
                      {Object.entries(country.languages).map((language, index) => {
                        return (
                          <span className="language-tag" key={index}>
                            {language[1]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="country-fact-card">
                    <div className="fact-label">Area</div>
                    <div className="fact-value area">{country.area.toLocaleString()} km²</div>
                  </div>
                  
                  <div className="country-fact-card">
                    <div className="fact-label">Time Zone</div>
                    <div className="fact-value timezone">{country.timezones[0]}</div>
                  </div>
                  
                  <div className="country-fact-card">
                    <div className="fact-label">Region</div>
                    <div className="fact-value region">{country.subregion}</div>
                  </div>
                  
                  <div className="country-fact-card">
                    <div className="fact-label">Calling Code</div>
                    <div className="fact-value calling-code">
                      {country.idd.root}{country.idd.suffixes && country.idd.suffixes[0]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
