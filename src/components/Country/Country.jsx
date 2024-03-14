import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, region, population } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Name: {name.official}</h3>
      <div>
        <img src={flags.png} alt="" />
      </div>
      <div className="flex">
        <h4>Region: {region}</h4>
        <h4>Population: {population}</h4>
      </div>
      <button onClick={handleVisited}>{visited ? "Visited":"Explore"}</button>
      
    </div>
  );
};

export default Country;
