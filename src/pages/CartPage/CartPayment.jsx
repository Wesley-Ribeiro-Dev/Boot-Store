import { styled } from "styled-components";
import arrow from "../../assets/iconmonstr-arrow-16.png";
import { Link } from "react-router-dom";
import useOrder from "../../hooks/useOrder";

export default function CartPayment() {
  const { itemList, totalPrice } = useOrder();
  return (
    <CartPaymentContainer>
      <Link to={"/checkout"}>
        <PayButtonShadow>
          <PayButton>
            <h1>F I N A L I Z A R</h1>
            <img src={arrow} alt="proximo" />
          </PayButton>
        </PayButtonShadow>
      </Link>

      <OrderInfo>
        <h1>Resumo do Pedido</h1>
        {itemList.map((item) => {
          return (
            <div className="priceLine" key={item._id}>
              <p>
                {item.quantity}x {item.name}
              </p>
              <p>
                R${(item.quantity * item.price).toFixed(2).replace(".", ",")}
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
        <div className="bottomLine" />
      </OrderInfo>
    </CartPaymentContainer>
  );
}

const CartPaymentContainer = styled.div`
  width: 400px;
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

  .bottomLine {
    height: 1px;
    background-color: lightgray;
  }
`;

function PriceLine(name, quantity, price) {}
