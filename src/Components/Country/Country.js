import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { name, region, population, area, flags } = props.country;
    return (
        // <div className='country'>
        //     <h2>Country Name: {props.name} </h2>
        //     <h4>Capital: {props.capital} </h4>
        //     <p>Region: {props.region} </p>
        //     <p>Population: {props.population} </p>
        //     <p>Area: {props.area} </p>
        // </div>






        // second niom


        // <div className='country'>
        //     <h2>Country Name: {props.country.name.common} </h2>
        //     <h4>Capital: {props.country.capital} </h4>
        //     <p>Region: {props.country.region} </p>
        //     <p>Population: {props.country.population} </p>
        //     <p>Area: {props.country.area} </p>
        // </div>







        // third system   distructing kora
        // ata korar jonno return er opore  . const {area, namgula akane jog hobe}=props.cuntry;
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} />
            <h4>Region: {region} </h4>
            <p>Population: {population} </p>
            <p>Area: {area} </p>
        </div>
    );
};

export default Country;