import { styled } from "styled-components";

const PageContainer = styled.div`
  display: flex;
  /* background-color: red; */
  padding-left: 15px;
  gap: 30px;
  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 40px;
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

const DeliveryOptions = styled.div`
  display: flex;
  /* background-color: green; */
`;

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PaymentMethodsContainer = styled.div`
  display: flex;
`

export {
  PageContainer,
  FormContainer,
  DeliveryOptions,
  Column,
};
