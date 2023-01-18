import React from "react";
import Carousel from "react-multi-carousel";

import SkillCard from "./SkillCard";

import dataJSON from "../utils/data.json";
import carouselConfig from "../utils/carouselConfig.json";

function Skills(): React.ReactElement {
  const { techs } = dataJSON;

  return (
    <div
      id="skills"
      className=""
    >
      <Carousel
        responsive={carouselConfig}
        infinite={true}
        className=""  
      >
        {
          techs.map(tech => (
            <div className="item" key={tech.id}>
              <SkillCard {...tech} />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Skills;
