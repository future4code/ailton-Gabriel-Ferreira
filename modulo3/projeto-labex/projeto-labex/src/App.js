import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import HomePage from "./pages/HomePage/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
