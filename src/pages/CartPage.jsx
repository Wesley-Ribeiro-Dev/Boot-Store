import { styled } from "styled-components";
import Header from "../components/Header";

export default function CartPage() {
	return (
		<>
			<Header />
			<CartContainer>
				<CartItens>
					<h1>Seu Carrinho</h1>
					<p>
						TOTAL (X produtos) <span className="bold">R$XXX,XX</span>
					</p>
                    <Item />
                    <Item />

				</CartItens>
				<CartPayment />
			</CartContainer>
		</>
	);
}

const CartContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 800px;
	margin-top: 80px;
`;

const CartItens = styled.div`
	display: flex;
	flex-direction: column;
	width: 700px;
	h1 {
		font-family: "Bebas Neue", sans-serif;
		font-size: 48px;
		margin-bottom: 18px;
	}
	p {
		font-family: "Rubik", sans-serif;
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 30px;
	}
	.bold {
		font-weight: 700;
	}
`;

const Item = styled.div`
	height: 200px;
	width: 600px;
	display: flex;
	margin-bottom: 30px;
    border: 1px solid gray;
    img{
        width: 200px;
    }
`;
const CartPayment = styled.div`
	width: 300px;
	height: 600px;
	background-color: red;
`;
