import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from "../context/UserDataContext";


export default function SignInPage() {

  const { setToken, token } = useContext(UserDataContext);
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

  return (
    <>
      <form onSubmit={event => {
        event.preventDefault();
        axios.post(`http://localhost:5000/`, login).then((user) => {
          console.log(user.data)
          navigate("/home");
          setToken(user.data);
          localStorage.setItem("token", user.data);

        }).catch((error) => {
          const erro = (error.response.status);
          if (erro === 422) return alert("Confira os dados!");
          if (erro === 404) return alert("Email não encontrado");
          if (erro === 401) return alert("Senha incorreta");
        })
      }}>
        <input data-test="email" required onChange={handleChange} value={login.email} name="email" placeholder="E-mail" type="email" />
        <input data-test="password" required onChange={handleChange} value={login.password} name="password" placeholder="Senha" type="password" />
        <button data-test="sign-in-submit">Entrar</button>
      </form>
      <Link to={"/register"}>
        Primeira vez? Cadastre-se!
      </Link>
    </>
  )
}
