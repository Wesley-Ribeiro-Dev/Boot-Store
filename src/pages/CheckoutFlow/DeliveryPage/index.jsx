import { useRef, useState } from "react";
import {
  Input,
  Select,
  StyledRow,
  SubmitButton,
} from "../../../components/FormComponents";
import {
  Column,
  DeliveryOptions,
  FormContainer,
  PageContainer,
} from "./styled";
import { useNavigate } from "react-router";

export default function DeliveryPage() {
  const navigate = useNavigate();
  const [deliveryFormData, setDeliveryFormData] = useState({
    name: "",
    surName: "",
    address: "",
    cep: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  });
  const [contactInfoFormData, setContactInfoFormData] = useState({
    phone: "",
    cpf: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

    if (e.target.password.value !== e.target.passwordConfirm.value) {
      alert("Os campos de senha precisam ter o mesmo valor!");
      return;
    }
    delete deliveryFormData.passwordConfirm;
    setIsLoading(true);
    const promise = api.signUp({
      ...deliveryFormData,
    });

    promise.then(() => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch((res) => {
      setIsLoading(false);
      alert(res.response.data.message);
    });
  }

  if (isLoading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
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
                <option value="">Estado</option>
                <option value="python">Python</option>
                <option value="c++">C++</option>
                <option value="java">Java</option>
              </Select>
            </StyledRow>
          </FormContainer>
          <FormContainer>
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
          <SubmitButton>
            Continuar Pagamento
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </SubmitButton>
        </Column>
        <Column></Column>
      </PageContainer>
    </>
  );
}
