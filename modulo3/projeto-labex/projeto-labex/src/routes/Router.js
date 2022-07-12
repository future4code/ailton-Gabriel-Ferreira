import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ListTripPage from "../pages/ListTripPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="/trips/list" element={<ListTripPage />} />
        <Route exact path="/trips/application" element={<ApplicationFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
