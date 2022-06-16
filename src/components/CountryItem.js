import React from 'react';


const CountryItem = ({ country, onCountryClick }) => {

    const handleClick = function (event) {
        // const selectedCountry = event.target.value
        onCountryClick(country);
    }
    return (
        <div>
            {/* <h2>{country.name.common}</h2> */}
            <li onClick={handleClick}>{country.name.common}  </li>
        </div>
    )



}

export default CountryItem;