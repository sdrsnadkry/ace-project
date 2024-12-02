"use client";

import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
          <div className="flex-1 p-6 bg-gray-100">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
