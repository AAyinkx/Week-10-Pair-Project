import FigletToPage from "@/components/figletToPage";
import FigletConsole from "@/components/figletConsole";
import FigletAnimation from "@/components/figletAnimation";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="text-center mt-10 items-center place-content-center">
      {/* <h1 className="text-6xl">ASCII Art</h1> */}
      <Header />
      <FigletToPage />
      <FigletConsole />
      <FigletAnimation />
    </div>
  );
}
