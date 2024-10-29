"use client";
import { useEffect, useState, useRef } from "react";
import { useAsciiText, alphabet } from "react-ascii-text";

export default function AsciiCount() {
  const [count, setCount] = useState(0);
  const asciiObject = useRef({
    font: alphabet,
    text: `${count}`,
    isAnimated: false,
  });

  //Counter

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
    asciiObject.current = {
      font: alphabet,
      text: `${count}`,
      isAnimated: false,
    };

    return () => {
      clearInterval(countInterval);
    };
  }, [count]);

  //Use ASCII text
  const asciiTextRef = useAsciiText(asciiObject);

  return (
    <>
      <p>This a Test</p>

      <pre ref={asciiTextRef}></pre>
    </>
  );
}
