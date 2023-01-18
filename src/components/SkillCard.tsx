import React from "react";
import { Icon } from "@iconify/react";

import { tech } from "../react-app-env";

function SkillCard({ name, code, image }: tech): React.ReactElement {
  return (
    <div className="item">
      <Icon icon={image} color="#000" />
      <p>{name}, {code}</p>
    </div>
  )
}

export default SkillCard;
