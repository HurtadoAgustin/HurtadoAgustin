import React from "react";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";

function App(): React.ReactElement {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
    </>
  );
}

export default App;
