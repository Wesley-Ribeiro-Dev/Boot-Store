import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/TestaLogo.png";
import carrinho from "../assets/cart-outline.svg";
import logoutIcon from "../assets/log-out-outline.svg";
import { useEffect, useContext } from "react";
import { UserDataContext } from "../contexts/UserDataContext";

export default function Header() {
  const navigate = useNavigate();
  const { setToken, token } = useContext(UserDataContext);

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  }

  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  return (
    <>
      <Head>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <p>Quanto maior a testa maior o desconto</p>
          <p>acabe com sua calvice aki</p>
        </div>
        <div>
          <img
            src={carrinho}
            onClick={() => navigate("/cart")}
            alt="carrinho logo"
          />
          <img onClick={logout} src={logoutIcon} alt="logout logo" />
        </div>
      </Head>
    </>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-family: "Bebas Neue", sans-serif;
    font-size: 25px;
  }
  img {
    width: 100px;
    height: auto;
	cursor: pointer;
  }
  div {
    img {
      margin: 10px;
      width: 40px;
      height: auto;
      cursor: pointer;
    }
  }
`;
