import React from "react";

import {
  SubscribeContainer,
  SubscribeHeading,
  SubscribeParagraph,
  SubscribeForm,
  SubscribeFormInput,
} from "./subscribe.styles";

import CustomButton from "../custom-button/custom-button";

const Subscribe = () => {
  return (
    <SubscribeContainer>
      <SubscribeHeading>Keep in touch</SubscribeHeading>
      <SubscribeParagraph>
        Subscribe to our monthly newsletter
      </SubscribeParagraph>
      <SubscribeForm>
        <SubscribeFormInput type="email" placeholder="Enter your email" />
        <CustomButton mainColor={true} size="small">
          Subscribe
        </CustomButton>
      </SubscribeForm>
    </SubscribeContainer>
  );
};

export default Subscribe;
