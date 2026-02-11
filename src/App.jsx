import { Suspense } from "react";
import "./App.css";
import Country from "./component/Country";

const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};

function App() {
  const countryPromise = fetchCountries();
  return (
    <>
      <h1 className="text-center p-5 font-bold text-2xl">
        React Rest Countries
      </h1>
      <Suspense fallback={<p>loading...</p>}>
        <Country countryPromise={countryPromise}></Country>
      </Suspense>
    </>
  );
}

export default App;
