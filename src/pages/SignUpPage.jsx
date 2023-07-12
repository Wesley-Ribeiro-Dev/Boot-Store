import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from 'styled-components';
import logo from "../assets/TestaLogo.png"


export default function SignUpPage() {

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(event) {
    const newRegister = { ...register };
    newRegister[event.target.name] = event.target.value;
    setRegister(newRegister);
  }

  return (
    <>
      <Head>
        <img src={logo} alt="logo" />
        <div>
          <p>Quanto maior a testa maior o desconto</p>
          <p>Acabe com sua calvíce aqui!</p>
        </div>
      </Head>

      <Form onSubmit={event => {
        event.preventDefault();
        const { name, email, password, confirmPassword } = register;

        if (password !== confirmPassword) {
          alert("As senhas são diferentes");
          return
        }

        const user = { name, email, password }

        axios.post(`http://localhost:5000/register`, user).then(() => navigate("/")).catch(error => {
          const erro = (error.response.status);
          if (erro === 422) return alert("Os dados são inválidos tente novamente");
          if (erro === 409) return alert("Esse email já esta em uso");
        });

      }}>
        <input required onChange={handleChange} value={register.name} name="name" placeholder="Nome" type="text" />
        <input required onChange={handleChange} value={register.email} name="email" placeholder="E-mail" type="email" />
        <input required onChange={handleChange} value={register.password} name="password" placeholder="Senha" type="password" />
        <input required onChange={handleChange} value={register.confirmPassword} name="confirmPassword" placeholder="Confirme a senha" type="password" />
        <button type="submit">Cadastrar</button>
      </Form>

      <Redirection>
        <Link to={"/"}>
          Já tem uma conta? Entre agora!
        </Link>
      </Redirection>
    </>
  )
}

const Head = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin-bottom:10px;
  margin-top:1px;
  padding:10px;
  border-top:1px lightgray solid;
  p{
    font-family: 'Bebas Neue', sans-serif;
    font-size:25px;
  }
  img{
  width:100px;
  height:auto;
  }
  div{
    img{
      margin:10px;
      width:40px;
      height:auto;
    }
  }
`
const Form = styled.form`
  border-top:1px lightgray solid;
  border-bottom:1px lightgray solid;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  input {
    font-size: 20px;
    width: 60%;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    }
  }
  button {
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: #000;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      width: 50%;
      padding: 12px;
      margin-bottom:15px;
  }`

const Redirection = styled.div`
  margin:5px;
  display:flex;
  justify-content:center;
  align-items:center;
  a{
    font-family: 'Bebas Neue', sans-serif;
    font-size:25px;
    font-weight: 700;
    line-height: 18px;
    color: black;
    text-decoration: none;
    padding-top: 30px;
  }
`
