import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import SkillDetail from "./components/SkillDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />}>
          <Route path=":name" element={<SkillDetail />} />
        </Route>
      {/*
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
      */}
      </Routes>
    </>
  );
}

export default App;
