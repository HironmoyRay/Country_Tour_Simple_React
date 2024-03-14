import { useState } from "react";
import "./Country.css";
const Country = ({ country,handleVisitedCountry, handleFlags }) => {
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
      <div style={{ margin: "5px" }}>
        <button onClick={() => handleVisitedCountry(country)}>Mark Country</button>
        <button onClick={() => handleFlags(flags)}> Mark Flags</button>
      </div>
      <button onClick={handleVisited}>{visited ? "Visited" : "Explore"}</button>
    </div>
  );
};

export default Country;
