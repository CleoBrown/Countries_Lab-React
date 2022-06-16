import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import Favourites from '../components/Favourites';
import CountryDetail from '../components/CountryDetail';


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();


    useEffect(() => {
        getCountries();
    }, [])

    const onCountryClick = function (country) {
        setSelectedCountry(country);
    }

    const getCountries = function () {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countries => setCountries(countries))
    }

    const sumPop = countries.reduce((total, country) => {
        return total + country.population
    }, 0)





    return (
        <>
            <h3>World Total Population:{" "}{sumPop}</h3>
            <CountryList countries={countries} onCountryClick={onCountryClick} />
        </>
    )
}

export default CountryContainer;