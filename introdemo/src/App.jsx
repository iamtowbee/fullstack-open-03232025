import Hello from "./Hello";

function App() {
  const friends = [
    { name: "Tola", age: 4 },
    {
      name: "Fela",
      age: 1,
    },
  ];

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Oluwatobiloba" age={26 + 10} />
      <Hello name={friends[0].name} age={friends[0].age} />
      <Hello name={friends[1].name} age={friends[1].age} />
    </div>
  );
}

export default App;
