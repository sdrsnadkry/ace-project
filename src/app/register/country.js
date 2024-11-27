import { useEffect, useState } from "react";

function Country(props) {
  const [countryList, setCountryList] = useState([]);

  const fetCountryList = async () => {
    try {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries");
      const json = await response.json();
      setCountryList(json?.data || []);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetCountryList();
  }, []);

  return (
    <div className="my-5">
      <label htmlFor="" className="block">
        Country
      </label>
      <select
        name=""
        id=""
        required
        value={props.country}
        onChange={(event) => {
          props.setCountry(event.target.value);
        }}
        className="border mt-2 w-full border-slate-800 p-2"
      >
        {countryList.map((country) => (
          <option key={country.iso3} value={country.country}>
            {country.country}
          </option>
        ))}
        {/* <option value="India">India</option> */}
      </select>
    </div>
  );
}

export default Country;
