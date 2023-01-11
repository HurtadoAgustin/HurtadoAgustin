import React from "react";
import dataJSON from "../utils/data.json";
const { techs } = dataJSON;

function Home() {
  return <div>
    {
      techs.map(el =>
        <div key={el.id}>
          {el.name}
        </div>)
    }
  </div>
};

export default Home;