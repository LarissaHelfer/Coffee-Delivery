import React from "react";
import "./global.css";
import Header from "./components/Header";
import Rotas from "./rotas";
import { CoffeeProvider, EnderecoProvider } from "./context";

function App() {
  return (
    <div>
      <EnderecoProvider>
        <CoffeeProvider>
        <Header />
        <Rotas />
        </CoffeeProvider>
      </EnderecoProvider>
    </div>
  );
}

export default App;
