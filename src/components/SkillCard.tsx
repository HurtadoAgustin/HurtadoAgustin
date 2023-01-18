import React from "react";
import { Icon } from "@iconify/react";

import { tech } from "../react-app-env";

function SkillCard({ name, code, image }: tech): React.ReactElement {
  return (
    <div className="item">
      <Icon icon={image} color="#000" />
      <h5>{name}, {code}</h5>
    </div>
  )
}

export default SkillCard;
