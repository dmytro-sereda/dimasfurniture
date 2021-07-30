import styled from "styled-components";

import {
  Heading2,
  Paragraph,
} from "../../overall-styles/overall-styles.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button";

export const SubscribeContainer = styled.section`
  background-image: linear-gradient(#a5f4d8, #e6ffdd);
  padding: 5.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SubscribeHeading = styled.h2`
  ${Heading2}
`;

export const SubscribeParagraph = styled.p`
  ${Paragraph}
  margin: 0.5rem 0 2.5rem 0;
`;

export const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SubscribeFormInput = styled(FormInput)`
  margin-right: 3rem;
`;
