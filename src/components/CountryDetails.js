// src/components/CountryDetails.js
import React from 'react';

function CountryDetails({ country }) {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={`${country.name.common} flag`} width="100" />
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0] || 'N/A'}</p>
        </div>
    );
}

export default CountryDetails;
