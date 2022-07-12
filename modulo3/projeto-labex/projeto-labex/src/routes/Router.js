import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ListTripPage from "../pages/ListTripPage/ListTripsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="viagens" element={<ListTripPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
