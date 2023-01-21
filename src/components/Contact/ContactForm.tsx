import React from "react";
//import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

import Row from "react-bootstrap/Row";
import Input from "./Input";

import { FormData } from "../../react-app-env";

function ContactForm(): React.ReactElement {
  const { register, formState: { errors }, handleSubmit } = useForm<FormData>();
  console.log(errors);

  const onSubmit = (values: FormData) => {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Input
          label="firstName"
          required
          register={register}
        />
        <Input
          label="lastName"
          register={register}
        />
      </Row>
      <Row>
        <Input
          label="email"
          type="email"
          max={50}
          required
          register={register}
        />
        <Input
          label="phone"
          type="tel"
          min={7}
          register={register}
        />
      </Row>
      <Row>
        <Input
          label="message"
          type="textarea"
          max={2000}
          sm={12}
          register={register}
        />
      </Row>
      <Row>
        {/*<Col>
          <ReCAPTCHA
            sitekey={}
            onChange={}
            onErrored={}
            theme="dark"
          />
        </Col>*/}
        <Input
          label="Send info"
          type="button"
        />
      </Row>
    </form>
  )
}

export default ContactForm;
