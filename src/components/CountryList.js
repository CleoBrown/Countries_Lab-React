import React from 'react';
import CountryItem from './CountryItem';

const CountryList = ({ countries, onCountryClick }) => {




    const CountryNodes = countries.map((country, index) => {

        return <CountryItem country={country} key={index} onCountryClick={onCountryClick} />

    })





    return (
        <ul>
            {CountryNodes}
        </ul>
    )

}



export default CountryList;