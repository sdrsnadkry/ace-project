"use client";
import countries from "@/data/country";
import { useState } from "react";
import Country from "./country";
import AsyncJavaScript from "./asyncJavaScript";
import AsyncAwait from "./asyncAwait";

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
    <div className="flex items-center justify-center h-screen bg-slate-400">
      <div className="bg-white w-[50%] p-5 rounded-lg max-h-[90%] overflow-scroll">
        <h1 className="text-2xl text-center">Registration Form</h1>

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
              className="w-full p-2 mt-2 border border-slate-800"
            />
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-2 mt-2 border border-slate-800"
            />
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Phone
            </label>
            <input
              type="number"
              className="w-full p-2 mt-2 border border-slate-800"
            />
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Address
            </label>
            <input
              type="text"
              className="w-full p-2 mt-2 border border-slate-800"
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
                  className="p-2 ml-2 border border-slate-800"
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
                  className="p-2 ml-2 border border-slate-800"
                />
              </div>
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="" className="block">
              Password
            </label>
            <div className="relative mt-2 bg-red-300">
              <input
                required
                type={isPwdVisible ? "text" : "password"}
                className="w-full p-2 border border-slate-800"
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
            className="px-10 py-2 text-white bg-blue-800 rounded-md"
            // onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </form>

        <AsyncAwait />
      </div>
    </div>
  );
}

export default Register;
