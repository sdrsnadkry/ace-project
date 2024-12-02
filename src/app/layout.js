"use client"; // Needed for using `useState` in App Router
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
