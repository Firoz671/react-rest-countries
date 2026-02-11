import React, { useState } from "react";

const ShowCountry = ({ data, handleVisitedCountries }) => {
  console.log();
  const curr = data.currencies.currencies;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    handleVisitedCountries(data);
    setVisited(!visited);
  };
  return (
    <div className="p-5">
      <div
        className={`shadow-2xl rounded-2xl w-fit p-12.5 h-full ${visited && "bg-green-400 border border-amber-500"}`}
      >
        <img src={data.flags.flags.png} alt="" />

        <h1>Name: {data.name.common}</h1>
        {Object.values(curr).map((curren) => (
          <p key={curren.name}>
            Currencies: {curren.name} ({curren.symbol})
          </p>
        ))}

        <p>
          Area:{data.area.area}{" "}
          {data.area.area > 300000 ? "Big Country" : "Small Country"}
        </p>
        <p>Population: {data.population.population}</p>
        <button onClick={handleVisited} className="btn bg-amber-300 mt-auto">
          {visited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default ShowCountry;
