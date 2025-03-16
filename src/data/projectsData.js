import urlShortener from "../assets/images/portfolio/urlShortener.png";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";

const projectsData = [
  {
    id: "uscc",
    name: "Compiler for C",
    stack: ["< C++ />", "< LLVM />", "< Compiler />"],
    src: "https://restful-countries.vercel.app/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "USCC is a recursive descent based C compiler that translates C source code into an executable binary file. It is implemented in C++ and uses the LLVM compiler infrastructure to generate optimized machine code.",
  },
];

export { projectsData };
