import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


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
    <div>
      <form onSubmit={event => {
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
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </div>
  )
}
