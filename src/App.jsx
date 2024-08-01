import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Pokedex/" element={<Home />} />
          <Route path="/Pokedex/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
