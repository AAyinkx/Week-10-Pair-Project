"use client";
import { useEffect, useState, useRef } from "react";
import { useAsciiText, alphabet } from "react-ascii-text";

export default function AsciiCount() {
  const [count, setCount] = useState(0);

  //Counter
  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  //Use ASCII text
  function UseAscii(counter) {
    const ascii = useAsciiText({
      font: alphabet,
      text: " 1 ",
    });
    return ascii;
  }

  const asciiTextRef = useAsciiText({
    font: alphabet,
    text: " H e l l o ",
    isAnimated: false,
  });

  return (
    <>
      <p>This a Test</p>

      <pre ref={asciiTextRef}></pre>
      <pre ref={UseAscii(count + 1)}></pre>
      <p>{count}</p>
    </>
  );
}
