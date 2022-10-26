import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1>Available Country: {countries.length}</h1>
            {
                countries.map(country => console.log(country))
            }

            {/* {
                countries.map(country => <Country
                    country={country}
                    name={country.name.common}
                    capital={country.capital}
                    population={country.population}
                    area={country.area}
                    region={country.region}
                ></Country>)
            } */}
            {/* second niom try it nice theke  */}




            {/* sob gula country ke pathay dilam  */}

            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;