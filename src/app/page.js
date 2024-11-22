"use client";

import Apple from "@/components/homepage/apple";
import List from "@/components/homepage/list";
import Samsung from "@/components/homepage/samsung";
import { useState } from "react";

export default function Home() {
  const [isApple, setIsApple] = useState(true);

  function toggleApple() {
    setIsApple(!isApple);
  }

  return (
    <div>
      <h1>Homepage</h1>
      {isApple ? <Apple /> : <Samsung />}
      <button className="border bg-green-300" onClick={toggleApple}>
        Toggle Apple
      </button>
      <List />
    </div>
  );
}
