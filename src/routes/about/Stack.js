import { React } from 'react'
const stack = [
  "C",
  "C++",
  "x86 Assembly",
  "Python",
  "Java",
  "JavaScript",
  "React.js",
  "GitHub",
  "Git",
  "SQL",
  "Linux"
];


const Stack = () => {
  return (
    <section>
      <h3 className="title-font white-text ">
        Here are a few tools & technologies I’ve been working with:
      </h3>
      <ol className="stack-list">
        {stack.map((item, index) =>
          (<li key={index}>{item}</li>)
        )}
      </ol>
    </section>
  );
};

export default Stack;
