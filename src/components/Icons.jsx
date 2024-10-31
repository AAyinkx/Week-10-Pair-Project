"use client";

import { useAsciiText, broadway } from "react-ascii-text";

export default function Icons() {
  //Use ASCII text
  const icons = useAsciiText({
    animationCharacters:
      "☆ ♛ ♚ ♫ ✪ ✿ ➳ ♥ ❥ ✯ ☼ ✄ ▓ ▒ ░ ☺ ☻ ♣ ♦ ♠ ♪ ¶ ۵ ❅ ⌘ ✎ ツ ♡ ✃ ✁ ☏ ❊ ❉ ❈ ❆ ✺ ❂ ✤ ✢ ⋆ ✦ ✧ ✩ ✰ ✪ ✫ ✬ ✭ ✮ ✯ ❂ ✱ ✲ ✵ ✶ ✷ ✸ ✹ ✐ ➢ ➣ ➤ ➥ ➦ ➧ ➨ ➚ ➘ ➙ ➛ ➜ ➝ ➞ ➸ ➲ ➳ ➳ ➴ ➵ ➶ ➷ ➸ ➹ ➺",
    animationCharacterSpacing: 8,
    animationDelay: 1000,
    animationDirection: "horizontal",
    animationInterval: 700,
    animationSpeed: 90,
    animationLoop: true,
    font: broadway,
    text: "I C O N S",
  });

  return (
    <>
      <pre
        className="mt-12 mb-12 font-bold 
          bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700
          bg-clip-text text-transparent"
        ref={icons}
      ></pre>
    </>
  );
}
