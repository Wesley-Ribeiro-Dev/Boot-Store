import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from "../contexts/UserDataContext";
import { styled } from 'styled-components';
import logo from "../assets/TestaLogo.png"


export default function SignInPage() {

  const { setToken, token } = useContext(UserDataContext);
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const newLogin = { ...login };
    newLogin[event.target.name] = event.target.value;
    setLogin(newLogin);
  }

  useEffect(() => {
    if (token !== null) {
      navigate("/home")
    }
  }, [])

  function subimitForm() {
    axios.post(`${VITE_API_URL}/`, login).then((user) => {
      navigate("/home");
      setToken(user.data);
      localStorage.setItem("token", user.data);
    }).catch((error) => {
      const erro = (error.response.status);
      if (erro === 422) return alert("Confira os dados!");
      if (erro === 404) return alert("Email não encontrado");
      if (erro === 401) return alert("Senha incorreta");
    })
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
        subimitForm()
      }}>
        <input data-test="email" required onChange={handleChange} value={login.email} name="email" placeholder="E-mail" type="email" />
        <input data-test="password" required onChange={handleChange} value={login.password} name="password" placeholder="Senha" type="password" />
        <button data-test="sign-in-submit">Entrar</button>
      </Form>
      <Redirection>
        <Link to={"/register"}>
          Primeira vez? Cadastre-se!
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