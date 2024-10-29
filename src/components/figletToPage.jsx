"use client";
import figlet from "figlet";
// import alphabet from "figlet/importable-fonts/Alphabet";
// import letters from "figlet/importable-fonts/Letters";
import { useAsciiText, alphabet } from "react-ascii-text";

export default function FigletToPage() {
  const asciiTextRef = useAsciiText({
    font: alphabet,
    text: "Hello",
    isAnimated: false,
  });

  return (
    <>
      <p>This a Test</p>

      <pre ref={asciiTextRef}></pre>
    </>
  );
}
