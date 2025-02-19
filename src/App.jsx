import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setCity(City.getCitiesOfState(country, state));
  };

  useEffect(() => {
    const states = State.getAllStates().filter(
      (state) => state.countryCode === country
    );

    setState(states);
  }, [country]);

  return (
    <>
      <div className="container">
        <div className="selector">
          <select name="country" id="" onChange={handleCountry}>
            <option value="">Select Country</option>
            {Country.getAllCountries().map((country) => {
              return (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <select name="state" id="" onChange={handleStateChange}>
            <option value="">Select State</option>
            {state.map((state, index) => {
              return (
                <option value={state.isoCode} key={index}>
                  {state.name}
                </option>
              );
            })}
          </select>
          <select name="city" id="">
            <option value="">Select City</option>
            {city.map((state, index) => {
              return (
                <option value={state.isoCode} key={index}>
                  {state.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
