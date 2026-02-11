import React, { use, useState } from "react";
import ShowCountry from "./ShowCountry";

const Country = ({ countryPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (data) => {
    const newVisited = [...visitedCountries, data];
    setVisitedCountries(newVisited);
  };
  // const [visitedFlag,setVisitedFlag] = useState([])
  // const handleVisitedFlag = ()=>{

  // }
  const countries = use(countryPromise);
  const countriesData = countries.countries;
  return (
    <>
      <h1 className="text-center">
        Total Visited Countries: {visitedCountries.length}
      </h1>
      <div className="border w-10/12 mx-auto p-5 mt-3">
        <ol className="flex gap-5">
          <h1>Visited:</h1>
          {visitedCountries.map((country) => (
            <li className="text-center">
              {country.name.common}{" "}
              <img className="h-10" src={country.flags.flags.png} alt="" />
            </li>
          ))}
        </ol>
      </div>
      <div className="grid grid-cols-4 ">
        {countriesData.map((data) => (
          <ShowCountry
            key={data.ccn3.ccn3}
            data={data}
            handleVisitedCountries={handleVisitedCountries}
          ></ShowCountry>
        ))}
      </div>
    </>
  );
};

export default Country;
