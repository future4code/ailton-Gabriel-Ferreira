import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaLogin } from "../pages/PaginaLogin";
import { PaginaCadastro } from "../pages/PaginaCadastro";
import { PaginaFeed } from "../pages/PaginaFeed";
import { PaginaPost } from "../pages/PaginaPost";
import { PaginaErro } from "../pages/PaginaErro";
import { PaginaHome } from "../pages/PaginaHome";
import { Context } from "../global/Context";
import { useState } from "react";

export const Router = () => {
  const [comentario, setComentario] = useState({});
  const objetoContext = {comentario, setComentario}
  return (
    <BrowserRouter>
      <Context.Provider value={objetoContext}>
        <Routes>
          <Route index element={<PaginaHome />} />
          <Route path="/cadastro" element={<PaginaCadastro />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/feed" element={<PaginaFeed />} />
          <Route path="/post" element={<PaginaPost />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};
