import { styled } from "styled-components";

const SubmitButton = styled.button`
  display: flex;
  border: none;
  background-color: #000;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  padding: 12px;
  width: 100%;
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
  max-width: 190px;
  position: relative;

  &:hover {
    color: #767677;
    ion-icon {
        color: #767677;
    }
  }

  ion-icon {
    position: absolute;
    right: 7px;
    bottom: 10px;
  }
`;

export default SubmitButton;
