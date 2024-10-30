"use client";

import { useAsciiText, nvScript } from "react-ascii-text";

export default function FigletToPage() {
  //Use ASCII text
  const asciiTextRef = useAsciiText({
    animationCharacters: "✐ ✎ ✐ ✎ ✐ ✎",
    animationCharacterSpacing: 8,
    animationDelay: 3000,
    animationDirection: "left",
    animationInterval: 500,
    animationSpeed: 70,
    animationLoop: true,
    font: nvScript,
    text: " H e l l o ",
  });

  return (
    <>
      <pre ref={asciiTextRef}></pre>
    </>
  );
}
