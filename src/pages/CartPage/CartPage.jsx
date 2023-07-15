import { styled } from "styled-components";
import Header from "../../components/Header";
import CartItens from "./CartItens";
import CartPayment from "./CartPayment";

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
	justify-content: space-evenly;
	height: 800px;
	margin-top: 80px;
`;
