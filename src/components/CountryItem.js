import React from 'react';


const CountryItem = ({ country, onCountryClick }) => {

    const handleClick = function () {
        onCountryClick(country);
    }
    return (
        <div>

            <li onClick={handleClick}>{country.name.common}  </li>
        </div>
    )



}

export default CountryItem;