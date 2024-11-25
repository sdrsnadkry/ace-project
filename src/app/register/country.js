import countries from "@/data/country";

import { useEffect } from "react";

function Country(props) {
  useEffect(() => {
    console.log("hello", props);
    if (props.country) {
      props.setName("Hello from " + props.country);
    } 
  }, [props.country]);

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
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
        {/* <option value="India">India</option> */}
      </select>
    </div>
  );
}

export default Country;
