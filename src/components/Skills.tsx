import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import dataJSON from "../utils/data.json";

function Skills() {
  const { techs } = dataJSON;
  const [ index, setIndex ] = useState<number>(0);
  
  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  }

  return <div>
    <Carousel
      variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {
        techs.map(tech => (
          <Carousel.Item
            key={tech.id}
            interval={2500}
          >
            <Carousel.Caption>
              <h3>{tech.name}</h3>
            </Carousel.Caption>
          </Carousel.Item> 
        ))
      }
    </Carousel>
  </div>
}

export default Skills;
