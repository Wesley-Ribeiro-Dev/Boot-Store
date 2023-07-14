import { styled } from "styled-components";
import Header from "../components/Header";

export default function CartPage() {
	return (
		<>
			<Header />
			<CartContainer>
				<CartItens>
					<h1>Seu Carrinho</h1>
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
	width: 800px;
	h1 {
		font-family: "Bebas Neue", sans-serif;
		font-size: 36px;
	}
`;
const CartPayment = styled.div`
	width: 300px;
	height: 600px;
	background-color: red;
`;
