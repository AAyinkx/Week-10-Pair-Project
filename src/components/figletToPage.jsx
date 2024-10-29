"use client";
import { useEffect, useState } from "react";
import { useAsciiText, alphabet } from "react-ascii-text";

export default function FigletToPage() {
  //Counter
  const [count, setCount] = useState(0);
  const [ascii, setAscii] = useState(
    useAsciiText({
      font: alphabet,
      text: `${count}`,
      isAnimated: false,
    })
  );
  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  useEffect(() => {
    setAscii(
      useAsciiText({
        font: alphabet,
        text: `${count}`,
        isAnimated: false,
      })
    );
  }, [count]);

  //Use ASCII text
  const asciiTextRef = useAsciiText({
    font: alphabet,
    text: " H e l l o ",
    isAnimated: false,
  });
  console.log(asciiTextRef);

  return (
    <>
      <p>This a Test</p>

      <pre ref={asciiTextRef}></pre>
      <pre ref={ascii}></pre>
    </>
  );
}
