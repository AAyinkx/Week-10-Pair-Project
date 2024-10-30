"use client";

import { useAsciiText, basic } from "react-ascii-text";

export default function FigletAnimation() {
  //Use ASCII text
  const asciiText = useAsciiText({
    animationCharacters: "❤",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationLoop: true,
    animationSpeed: 30,
    font: basic,
    text: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
  });

  return (
    <>
      <pre ref={asciiText}></pre>
    </>
  );
}
