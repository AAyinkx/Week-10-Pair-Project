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
    text: [" ASCII ART "],
  });

  return (
    <div>
      <pre
        ref={asciiText}
        className="border border-solid border-x-8 border-y-8 border-t-purple-950 border-b-purple-950 border-l-pink-800 border-r-pink-800 text-purple-300 overflow-scroll"
      ></pre>
    </div>
  );
}
