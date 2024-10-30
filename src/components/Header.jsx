"use client";

import { useAsciiText, doh } from "react-ascii-text";

export default function Header() {
  //Use ASCII text
  const asciiText = useAsciiText({
    animationCharacters: "❤",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationSpeed: 30,
    fadeInOnly: true,
    animationLoop: false,
    font: doh,
    text: ["ASCII ART "],
  });

  return (
    <>
      <pre ref={asciiText}></pre>
    </>
  );
}
