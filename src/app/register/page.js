"use client";
import countries from "@/data/country";
import { useState } from "react";
import Country from "./country";

//hooks
//useState
//useEffect

function Register() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const [isPwdVisible, setIsPwdVisible] = useState(false);

  function handleSubmit() {
    console.log(name, country, gender);
  }

  return (
    <div className="bg-slate-400 h-screen flex items-center justify-center">
      <div className="bg-white w-[50%] p-5 rounded-lg max-h-[90%] overflow-scroll">
        <h1 className="text-center text-2xl">Registration Form</h1>

        {/* form elements */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div className="my-5">
            <label htmlFor="fullName" className="block">
              Name
            </label>
            <input
              type="text"
              value={name}
              required
              name="fullName"
              id="fullName"
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="border mt-2 w-full border-slate-800 p-2"
            />
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Email
            </label>
            <input
              type="email"
              required
              className="border mt-2 w-full border-slate-800 p-2"
            />
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Phone
            </label>
            <input
              type="number"
              className="border mt-2 w-full border-slate-800 p-2"
            />
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Address
            </label>
            <input
              type="text"
              className="border mt-2 w-full border-slate-800 p-2"
            />
          </div>
          <Country
            name={name}
          country={country}
          setCountry={setCountry}
          setName={setName}
          />
         
          <div className="my-5">
            <label htmlFor="" className="block mb-3">
              Gender
            </label>

            <div className="flex">
              <div>
                <label htmlFor="male" className="">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "male"}
                  onChange={(event) => {
                    setGender("male");
                  }}
                  id="male"
                  className="border ml-2 border-slate-800 p-2"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="female" className="">
                  Female
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  checked={gender === "female"}
                  onChange={(event) => {
                    setGender("female");
                  }}
                  className="border ml-2  border-slate-800 p-2"
                />
              </div>
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Password
            </label>
            <div className="bg-red-300 relative mt-2">
              <input
                required
                type={isPwdVisible ? "text" : "password"}
                className="border  w-full border-slate-800 p-2"
              />
              <button
                className="absolute right-2 bottom-2"
                onClick={() => {
                  setIsPwdVisible(!isPwdVisible);
                }}
              >
                {isPwdVisible ? "Hide" : "View"}
              </button>
            </div>
          </div>

          <button
            className="bg-blue-800 text-white px-10 py-2 rounded-md"
            // onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
