import FigletToPage from "@/components/figletToPage";
import FigletConsole from "@/components/figletConsole";
import FigletAnimation from "@/components/figletAnimation";
import Header from "@/components/Header";
import Icons from "@/components/Icons";

export default function Home() {
  return (
    <div className="text-center mt-10 items-center place-content-center">
      <Header />
      <FigletToPage />
      <FigletConsole />
      {/* <Icons /> */}
      <FigletAnimation />
    </div>
  );
}
