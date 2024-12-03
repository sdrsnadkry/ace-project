"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

//hooks
//useState
//useEffect

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const checkLoggedInUser = (email, password) => {
    if (email === "admin@ecom.com" && password === "password") {
      const token = "asdasd123123asdhajkdskjdhfiushdfi";
      return token;
    } else {
      throw Error("Not valid user");
    }
  };

  function handleSubmit() {
    try {
      const token = checkLoggedInUser(email, password);
      localStorage.setItem("authToken", token);
      router.replace("/dashboard");
    } catch (error) {
      toast("Invalid credentials");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-400">
      <div className="bg-white w-[50%] p-5 rounded-lg max-h-[90%] overflow-scroll">
        <h1 className="text-2xl text-center">Login Form</h1>

        {/* form elements */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div className="my-5">
            <label htmlFor="" className="block">
              Email
            </label>
            <input
              value={email}
              type="email"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-full p-2 mt-2 border border-slate-800"
            />
          </div>

          <div className="my-5">
            <label htmlFor="" className="block">
              Password
            </label>
            <div className="relative mt-2 bg-red-300">
              <input
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
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
      </div>
    </div>
  );
}

export default Login;
