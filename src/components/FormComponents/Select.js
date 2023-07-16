import { styled } from "styled-components";

const Select = styled.select`
  min-width: 48%;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  padding: 15px;
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  background-image: url(".../../../src/assets/images/icons/chevron-down-outline.svg");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;
`;

export default Select;
