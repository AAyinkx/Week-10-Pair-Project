import FigletToPage from "@/components/figletToPage";
import FigletConsole from "@/components/figletConsole";

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-10 text-6xl">ASCII Art</h1>
      <FigletToPage />
      <FigletConsole />
    </>
  );
}
