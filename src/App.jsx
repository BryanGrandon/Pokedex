import { usePokemonContext } from "./context/pokemon-context";

function App() {
  let { saved } = usePokemonContext();

  console.log(saved);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
