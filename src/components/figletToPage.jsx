"use client";

import { useAsciiText, nvScript } from "react-ascii-text";

export default function FigletToPage() {
  //Use ASCII text
  const asciiTextRef = useAsciiText({
    animationCharacters: "✐ ✎ ✐ ✎ ✐ ✎",
    animationCharacterSpacing: 8,
    animationDelay: 2000,
    animationDirection: "left",
    animationInterval: 500,
    animationSpeed: 70,
    animationLoop: true,
    font: nvScript,
    text: "H e l l o",
  });

  return (
    <>
      <pre
        className="mt-12 mb-12 font-bold 
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
          bg-clip-text text-transparent"
        ref={asciiTextRef}
      ></pre>
    </>
  );
}
