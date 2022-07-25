import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PaginaLogin} from "../pages/PaginaLogin"
import {PaginaCadastro} from "../pages/PaginaCadastro"
import {PaginaFeed} from "../pages/PaginaFeed"
import {PaginaPost} from "../pages/PaginaPost"
import {PaginaErro} from "../pages/PaginaErro"
import {PaginaHome} from "../pages/PaginaHome"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaHome/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router
