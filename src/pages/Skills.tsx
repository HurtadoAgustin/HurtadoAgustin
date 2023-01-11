import React from "react";
import { Link, Outlet } from "react-router-dom";

import dataJSON from "../utils/data.json";
const { techs } = dataJSON;

function Skills() {
  return <div>
    {
      techs.map(el =>
        <Link to={el.code} key={el.id}>
          {el.name}
        </Link>)
    }
    <hr/>
    <Outlet />
  </div>
}

export default Skills;
