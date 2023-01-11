import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      {/*
        <Route path="/skills" element={<Skills />}>
          <Route path="/:name" element={<SkillDetail />} />
        </Route>
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
      */}
      </Routes>
    </>
  );
}

export default App;
