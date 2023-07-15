import { styled } from "styled-components";
import Header from "../../components/Header";
import CartItens from "./CartItens";

export default function CartPage() {
	return (
		<>
			<Header />
			<CartContainer>
				<CartItens />
				<CartPayment />
			</CartContainer>
		</>
	);
}

const CartContainer = styled.div`
	display: flex;
	justify-content: space-around;
	height: 800px;
	margin-top: 80px;
`;

const CartPayment = styled.div`
	width: 300px;
	height: 600px;
	background-color: red;
`;
