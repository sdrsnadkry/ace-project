"use client";

function Sidebar(props) {
  return (
    <div
      className={`bg-gray-800 text-white w-64 fixed h-full transition-transform z-10 ${
        props.sidebarOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <button
        className="p-4 text-white"
        onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
      >
        {props.sidebarOpen ? "Close" : "Open"} Menu
      </button>
      <nav className="p-4 space-y-4">
        <a href="/" className="block">
          Home
        </a>
        <a href="/home" className="block">
          Dashboard
        </a>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
}

export default Sidebar;
