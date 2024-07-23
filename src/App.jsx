import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PokemonInfo from "./pages/pokemon-info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
