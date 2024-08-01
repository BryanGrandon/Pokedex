import React from "react";
import ReactDOM from "react-dom/client";

import "./main.scss";
import { PokemonContextProvider } from "./context/pokemon-context.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
// Pages
import Home from "./pages/home.jsx";
import Pokemon from "./pages/pokemon.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon:id",
    element: <Pokemon />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <RouterProvider router={router} />
    </PokemonContextProvider>
  </React.StrictMode>
);
