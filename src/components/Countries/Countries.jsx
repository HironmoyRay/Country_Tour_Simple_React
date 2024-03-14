import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[]);

    const handleVisitedCountry = (country) => {
        console.log("handleVisitedCountry");
        // console.log(country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleFlags = (flags) => {
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div>
      <h2>Visited Countries: {visitedCountries.length} </h2>
      <ul>
        <h3>The Countries You want to Visit: </h3>
      {
        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
      }
      </ul>
      <ul>
        <h3>Collection of Your Favourite Flags: </h3>
        {
            visitedFlags.map(flag => <img key={flag.alt} src={flag.png} className="flag"></img>)
        }
      </ul>
      </div>
      <div className="countries-container">
      {
        countries.map(country=><Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} handleFlags={handleFlags}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
