import { styled } from "styled-components";

const PageContainer = styled.div`
  display: flex;
  /* background-color: red; */
  padding-left: 15px;
  gap: 70px;
  justify-content: center;
  margin-top: 30px;
  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
  }
  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 30px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* background-color: yellow; */
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  gap: 30px;
`;

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  max-height: 402px;
`;

const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const PayButton = styled.button`
  position: absolute;
  top: -3px;
  right: 3px;

  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;

  outline: none;
  border: none;
  background-color: black;

  cursor: pointer;
  transition: background-color 0.5s;
  transition: transform 0.2s ease-out;

  h1 {
    position: absolute;
    top: 8px;
    left: 18px;
    font-family: "Bebas Neue", sans-serif;
    font-size: 32px;
    color: white;
  }

  img {
    width: 48px;
    position: absolute;
    top: 2px;
    right: 18px;
  }

  &:hover {
    transition: background-color 0.5s;
    background-color: rgb(50, 50, 50);
  }
  &:active {
    transform: translateY(3px) translateX(3px);
    transition: transform 0.2s ease-out;
  }
`;

const PayButtonShadow = styled.div`
  position: relative;

  width: 100%;
  height: 50px;
  background-color: white;
  border: solid 1px black;

  margin-bottom: 60px;
`;

const OrderInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  margin-top: 10px;

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 32px;
    text-align: left;
    margin-bottom: 20px;
  }

  .priceLine {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .priceLine h2 {
    margin-top: 13px;
    font-family: "Rubik", sans-serif;
    font-size: 15px;
    font-weight: 700;
  }

  p {
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: gray;
  }
`;

const BottomLine = styled.div`
  height: 1px;
  background-color: lightgray;
`;

function PriceLine(name, quantity, price) {}

export {
  PageContainer,
  FormContainer,
  Column,
  PayButton,
  PayButtonShadow,
  OrderInfo,
  OrderDetailsContainer,
  OrderSummaryContainer,
  CardsWrapper,
  PaymentMethodsContainer,
  BottomLine
};
