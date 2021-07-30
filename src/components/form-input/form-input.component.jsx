import React from "react";

import { FormInputContainer } from "./form-input.styles";

const FormInput = ({ email, placeholder }) => {
  return <FormInputContainer type={email} placeholder={placeholder} />;
};

export default FormInput;
