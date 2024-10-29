import figlet from "figlet";
// import alphabet from "figlet/importable-fonts/Alphabet";
import letters from "figlet/importable-fonts/Letters";

export default function FigletConsole() {
  function FigletTest() {
    figlet.parseFont("Letters", letters);

    figlet.text(
      "0 1 2 3",
      {
        font: "Letters",
      },
      function (err, data) {
        console.log(data);
        return data;
      }
    );
  }

  return (
    <>
      <h1> HELLO!</h1>

      <p>{FigletTest()}</p>
    </>
  );
}
