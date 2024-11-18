"use client"; // Needed for using `useState` in App Router
import "./globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          {/* Sidebar */}
          <div
            className={`bg-gray-800 text-white w-64 fixed h-full transition-transform z-10 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-64"
            }`}
          >
            <button
              className="p-4 text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? "Close" : "Open"} Menu
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

          {/* Main Content */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 ${
              sidebarOpen ? "ml-64" : "ml-0"
            }`}
          >
            {/* Header */}
            <header className="bg-blue-500 text-white p-4 flex justify-between items-center sticky top-0 z-20">
              <div className="text-md font-bold">
                <button
                  className="p-4 text-white"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? "Close" : "Open"} Menu
                </button>
                Logo
              </div>
              <div className="flex items-center space-x-4 min-w-[25rem]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 rounded bg-gray-100 text-black w-full"
                />
              </div>
              <div className="rounded-full bg-yellow-400 p-2 w-10 h-10 flex items-center justify-center text-blue-950">S</div>
            </header>

            {/* Page Content */}
            <main className="flex-1 p-6 bg-gray-100">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
