import { useState } from "react";

function Header(props) {
  const [inputValue, setInputValue]  = useState("Apple")
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center sticky top-0 z-20">
      <div className="text-md font-bold">
        <button
          className="p-4 text-white"
          onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
        >
          {props.sidebarOpen ? "Close" : "Open"} 
         {/* { props.name} */}
        </button>
        Logo
      </div>
      <div className="flex items-center space-x-4 min-w-[25rem]">
        <input
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
          value={inputValue}
          placeholder="Search...."
          className="p-2 rounded bg-gray-100 text-black w-full"
        />
      </div>
      <div className="rounded-full bg-yellow-400 p-2 w-10 h-10 flex items-center justify-center text-blue-950">
        S
      </div>
    </header>
  );
}

export default Header;
