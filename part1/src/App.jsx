import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  const exercises = [exercise1, exercise2, exercise3];
  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />

      <Content exercises={exercises} parts={parts} />

      <Total exercises={exercises} />
    </div>
  );
}

export default App;
