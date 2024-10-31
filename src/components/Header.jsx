"use client";

import { useAsciiText, doh } from "react-ascii-text";

export default function Header() {
  //Use ASCII text
  const header = useAsciiText({
    animationCharacters: "❤",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationSpeed: 30,
    fadeInOnly: true,
    animationLoop: false,
    font: doh,
    text: "ASCII ART",
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 to-black">
      <pre
        ref={header}
        className="
          p-4 text-sm text-pink-300 font-bold
          border-2 border-double border-transparent
          rounded-lg shadow-lg 
          bg-clip-border
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
          animate-gradient-x
          transition transform hover:scale-105 duration-300 ease-in-out
          overflow-scroll m-2
        "
      ></pre>
    </div>
  );
}
