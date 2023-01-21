import React from "react";
import Col from "react-bootstrap/Col";

import useInputRules from "../../hooks/useInputRules";
import { InputFormData } from "../../react-app-env";

function Input({
  register = () => {},
  label,
  type = "text",
  min = 3,
  max = 20,
  required = false,
  rules = {},
  sm = 6,
}: InputFormData): React.ReactElement {

  const Patterns = useInputRules();
  
  if (type === "button") return (
    <Col size={12} sm={sm} className="px-1">
      <button type="submit">{label}</button>
    </Col>
  )

  rules = Patterns[type];

  return (
    <Col size={12} sm={sm} className="px-1">
      <input
        type={type}
        {...register(label, {
          required: required,
          minLength: min,
          maxLength: max,
          ...rules
        })}
      />
    </Col>
  )
}

export default Input;
