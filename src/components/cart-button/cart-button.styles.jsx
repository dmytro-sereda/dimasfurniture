import styled from "styled-components";

export const CartButtonContainer = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  border: none;
  cursor: pointer;
  margin-left: 2.8rem;
  transition: all 0.4s;
  padding-top: 0.6rem;

  &:hover {
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.1);
  }
`;
