// src/components/CountryList.js
import React from 'react';
import { Link } from 'react-router-dom';

function CountryList({ countries }) {
    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name.common}>
                    <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                </li>
            ))}
        </ul>
    );
}

export default CountryList;
