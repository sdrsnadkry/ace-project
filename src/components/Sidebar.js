"use client";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function toggleSidebar(){
    setSidebarOpen(!sidebarOpen)
  }

  if (sidebarOpen) {
    return (
      <div className="h-full bg-green-600 w-[300px] px-2 py-2">
        <div className="flex items-center justify-between">
          <h1>Logo</h1>
          <button onClick={toggleSidebar}>Close</button>
        </div>
        <ul>
          <li className="py-2">Home Page</li>
          <li className="py-2">Projects</li>
          <li className="py-2">Course</li>
          <li className="py-2">FAQ</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>
    );
  }else{
    return <div>
      <button onClick={toggleSidebar}>Open</button>
    </div>
  }
}
