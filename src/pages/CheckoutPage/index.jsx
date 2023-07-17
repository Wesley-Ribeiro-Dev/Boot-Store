import { useContext, useEffect, useRef, useState } from "react";
import arrow from "../../assets/iconmonstr-arrow-16.png";
import { Input, Select, StyledRow } from "../../components/FormComponents";
import {
  BottomLine,
  CardsWrapper,
  Column,
  FormContainer,
  OrderDetailsContainer,
  OrderInfo,
  PageContainer,
  PayButton,
  PayButtonShadow,
  PaymentMethodsContainer,
} from "./styled";
import { useNavigate } from "react-router";
import useOrder from "../../hooks/useOrder";
import ProductCard from "../../components/ProductCard";
import { UserDataContext } from "../../contexts/UserDataContext";
import api from "../../services/api";
import axios from "axios";

export default function CheckoutPage() {
  const { itemList, setItemList, setTotalPrice, totalPrice, setTotalQuantity } =
    useOrder();
  const { token } = useContext(UserDataContext);
  const brazilStates = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso do Sul",
    "Mato Grosso",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];
  const paymentOptions = ["Crédito / Débito", "Boleto", "Pix"];
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("Crédito / Débito");
  const [deliveryFormData, setDeliveryFormData] = useState({
    name: "",
    surName: "",
    address: "",
    cep: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "Acre",
  });
  const [contactInfoFormData, setContactInfoFormData] = useState({
    phone: "",
    cpf: "",
  });
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/cart`)
      .then((res) => {
        setItemList(res.data);
        if (res.data.length === 0) navigate("/home");
        let auxForTotal = 0;
        let auxForQuantity = 0;
        res.data.forEach((item) => {
          auxForTotal += item.quantity * item.price;
          auxForQuantity += Number(item.quantity);
        });
        setTotalPrice(auxForTotal);
        setTotalQuantity(auxForQuantity);
      })
      .catch((res) => {
        alert(res);
      });
  }, []);

  function handleDeliveryForm(e) {
    setDeliveryFormData({
      ...deliveryFormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleContactInfoForm(e) {
    setContactInfoFormData({
      ...contactInfoFormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const order = {
      paymentMethod,
      value: totalPrice,
      products: itemList,
    };

    const body = {
      delivery: deliveryFormData,
      contact: contactInfoFormData,
      order,
    };

    const promise = api.saveOrder(body, token);

    promise.then(() => {
      alert("Pedido criado com sucesso!");
      navigate("/home");
    });
    promise.catch((res) => {
      alert(res.response.data.message);
    });
  }

  return (
    <>
      <PageContainer>
        <Column>
          <FormContainer>
            <h1>Informações de Entrega</h1>
            <StyledRow>
              <Input
                type="text"
                placeholder="Nome *"
                name="name"
                onChange={handleDeliveryForm}
                value={deliveryFormData.name}
                required
                autoComplete="true"
              ></Input>
              <Input
                type="text"
                placeholder="Sobrenome *"
                name="surName"
                onChange={handleDeliveryForm}
                value={deliveryFormData.surName}
                required
                autoComplete="true"
              ></Input>
            </StyledRow>
            <Input
              type="text"
              placeholder="Endereço *"
              name="address"
              onChange={handleDeliveryForm}
              value={deliveryFormData.address}
              required
              autoComplete="true"
            ></Input>
            <StyledRow>
              <Input
                type="text"
                placeholder="CEP *"
                name="cep"
                onChange={handleDeliveryForm}
                value={deliveryFormData.cep}
                required
                autoComplete="true"
              ></Input>
              <Input
                type="text"
                placeholder="Número *"
                name="number"
                onChange={handleDeliveryForm}
                value={deliveryFormData.number}
                required
                autoComplete="true"
              ></Input>
            </StyledRow>
            <StyledRow>
              <Input
                type="text"
                placeholder="Informações adicionais"
                name="complement"
                onChange={handleDeliveryForm}
                value={deliveryFormData.complement}
                autoComplete="true"
              ></Input>
              <Input
                type="text"
                placeholder="Bairro *"
                name="neighbourhood"
                onChange={handleDeliveryForm}
                value={deliveryFormData.neighbourhood}
                required
                autoComplete="true"
              ></Input>
            </StyledRow>
            <StyledRow>
              <Input
                type="text"
                placeholder="Cidade *"
                name="city"
                onChange={handleDeliveryForm}
                value={deliveryFormData.city}
                required
                autoComplete="true"
              ></Input>
              <Select
                name="state"
                onChange={handleDeliveryForm}
                required
                value={deliveryFormData.state}
              >
                {brazilStates.map((state) => (
                  <option value={state} key={state}>
                    {state}
                  </option>
                ))}
              </Select>
            </StyledRow>
            <h1>Informações de contato</h1>
            <Input
              type="text"
              placeholder="Número de telefone *"
              name="phone"
              onChange={handleContactInfoForm}
              value={contactInfoFormData.phone}
              required
              autoComplete="true"
            ></Input>
            <Input
              type="text"
              placeholder="CPF *"
              name="cpf"
              onChange={handleContactInfoForm}
              value={contactInfoFormData.cpf}
              required
              autoComplete="true"
            ></Input>
          </FormContainer>
          <PaymentMethodsContainer>
            <h1>Método de pagamento</h1>
            <Select
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
              value={paymentMethod}
            >
              {paymentOptions.map((method) => (
                <option value={method} key={method}>
                  {method}
                </option>
              ))}
            </Select>
          </PaymentMethodsContainer>
        </Column>
        <Column>
          <OrderInfo>
            <h1>Resumo do Pedido</h1>
            {itemList.map((item, index) => {
              return (
                <div className="priceLine" key={index}>
                  <p>
                    {item.quantity}x {item.name}
                  </p>
                  <p>
                    R$
                    {(item.quantity * item.price).toFixed(2).replace(".", ",")}
                  </p>
                </div>
              );
            })}

            <div className="priceLine">
              <p>Entrega</p>
              <p>Grátis</p>
            </div>
            <div className="priceLine">
              <h2>Total</h2>
              <h2>R${totalPrice.toFixed(2).replace(".", ",")}</h2>
            </div>
            <BottomLine></BottomLine>
          </OrderInfo>
          <OrderDetailsContainer>
            <h2>Detalhes do pedido</h2>
            <CardsWrapper>
              {itemList.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))}
            </CardsWrapper>
            <BottomLine></BottomLine>
          </OrderDetailsContainer>
          <PayButtonShadow>
            <PayButton onClick={handleSubmit}>
              <h1>F a z e r - p e d i d o</h1>
              <img src={arrow} alt="proximo" />
            </PayButton>
          </PayButtonShadow>
        </Column>
      </PageContainer>
    </>
  );
}
