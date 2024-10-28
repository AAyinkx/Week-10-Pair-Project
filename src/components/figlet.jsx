import figlet from "figlet";
// import alphabet from "figlet/importable-fonts/Alphabet";
import letters from "figlet/importable-fonts/Letters";

export default function UseFiglet() {
  //   var figlet = require("figlet");

  //   figlet.parseFont("Letters", letters);

  //   figlet.text(
  //     "0 1 2 3",
  //     {
  //       font: "Letters",
  //     },
  //     function (err, data) {
  //       console.log(data);
  //     }
  //   );
  //   console.log("hello world!");

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
