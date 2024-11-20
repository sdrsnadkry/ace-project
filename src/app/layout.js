"use client"; // Needed for using `useState` in App Router
import "./globals.css";
import { useState } from "react";
import Header from "../components/header";
import SidebarABcd from "../components/Sidebar";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          {/* Sidebar */}

          <SidebarABcd 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 ${
              sidebarOpen ? "ml-64" : "ml-0"
            }`}
          >
            {/* Header */}
            <Header
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              name="Ayush ABC"
              address="Ktm"
              phone={"984006162637612"}
            />
            {/* Page Content */}
            <main className="flex-1 p-6 bg-gray-100">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
