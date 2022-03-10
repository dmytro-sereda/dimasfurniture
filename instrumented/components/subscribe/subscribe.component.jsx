import React from "react";

import {
  SubscribeContainer,
  SubscribeHeading,
  SubscribeParagraph,
  SubscribeForm,
  SubscribeButton,
} from "./subscribe.styles";

import FormInput from "../form-input/form-input.component";

const Subscribe = () => {
  return (
    <SubscribeContainer>
      <SubscribeHeading>Keep in touch</SubscribeHeading>
      <SubscribeParagraph>
        Subscribe to our monthly newsletter
      </SubscribeParagraph>
      <SubscribeForm>
        <FormInput type="email" placeholder="Enter your email" />
        <SubscribeButton
          onClick={() => console.log("Subscribed!")}
          mainColor={true}
          size="small"
        >
          Subscribe
        </SubscribeButton>
      </SubscribeForm>
    </SubscribeContainer>
  );
};

export default Subscribe;
