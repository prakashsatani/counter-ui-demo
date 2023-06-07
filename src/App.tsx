import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import CounterWithReducer from "./pages/CounterWithReducer";
import CounterWitContext from "./pages/CounterWithContext";
import UIDemo from "./pages/UISample";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter-with-reducer" element={<CounterWithReducer />} />
        <Route path="/counter-with-context" element={<CounterWitContext />} />
        <Route path="/ui-sample" element={<UIDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
