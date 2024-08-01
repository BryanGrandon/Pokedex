import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pokedex/" element={<Home />} />
          <Route path="/Pokedex/pokemon/:id" element={<div>SS</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
