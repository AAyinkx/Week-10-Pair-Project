import { figlet } from "figlet";
import UseFiglet from "@/components/figlet";

// import standard from "figlet/importable-fonts/Standard.js";

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-10 text-6xl">Clock</h1>
      <UseFiglet />
    </>
  );
}
