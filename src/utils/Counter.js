import { useState, useEffect } from "react";

export function Counter(cookiesPerSecond) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + cookiesPerSecond);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [cookiesPerSecond]);

  return count;
}
