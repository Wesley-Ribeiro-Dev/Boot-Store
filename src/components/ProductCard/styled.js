import { styled } from "styled-components";

const ProductCardContainer = styled.div`
  display: flex;
  gap: 15px;

  img {
    height: 151px;
    width: 151px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #000;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
  }
`;
export { ProductCardContainer };
