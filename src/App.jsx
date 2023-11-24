import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal01 from "./pages/Modal01";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/modal" element={<Modal01 />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
