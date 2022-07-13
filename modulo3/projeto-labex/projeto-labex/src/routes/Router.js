import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import ListTripPage from "../pages/ListTripPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailPage from "../pages/TripDetailsPage/TripDetailsPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="/trips/list" element={<ListTripPage />} />
        <Route exact path="/trips/application" element={<ApplicationFormPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/adminPanel" element={<AdminHomePage/>} />
        <Route exact path="/adminPanel/details/:id" element={<TripDetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
