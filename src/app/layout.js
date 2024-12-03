"use client"; // Needed for using `useState` in App Router
import { useState } from "react";
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>
        {children}

        <Toaster position="top-left" closeButton />
      </body>
    </html>
  );
}
