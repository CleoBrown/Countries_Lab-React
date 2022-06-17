import React from 'react';


const CountryDetail = ({ selectedCountry }) => {
    return (
        <div>
            <h3>{selectedCountry.name.common}</h3>
            <p>{selectedCountry.capital}</p>
            <p>{selectedCountry.population}</p>
        </div>
    )
}

export default CountryDetail;