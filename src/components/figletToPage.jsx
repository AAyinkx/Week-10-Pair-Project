"use client";

import { useAsciiText, alphabet } from "react-ascii-text";

export default function FigletToPage() {
  //Use ASCII text
  const asciiTextRef = useAsciiText({
    font: alphabet,
    text: " H e l l o ",
    isAnimated: false,
  });

  return (
    <>
      <p>This a Test</p>
      <pre ref={asciiTextRef}></pre>
    </>
  );
}
