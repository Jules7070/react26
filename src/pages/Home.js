// src/pages/Home.js
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

function Home() {
    const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all');
    const [search, setSearch] = useState('');

    const filteredCountries = countries?.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Explorador de Países</h1>
            <SearchBar onSearch={setSearch} />
            <CountryList countries={filteredCountries || []} />
        </div>
    );
}

export default Home;
