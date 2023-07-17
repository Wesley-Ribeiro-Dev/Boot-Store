import { styled } from "styled-components";
import Header from "../../components/Header";
import CartItens from "./CartItens";
import CartPayment from "./CartPayment";
import useOrder from "../../hooks/useOrder";

export default function CartPage() {
	const { itemList, setItemList, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity} = useOrder();

	return (
		<>
			<Header />
			<CartContainer>
				<CartItens
					itemList={itemList}
					setItemList={setItemList}
					totalPrice={totalPrice}
					setTotalPrice={setTotalPrice}
					totalQuantity={totalQuantity}
					setTotalQuantity={setTotalQuantity}
				/>
				<CartPayment itemList={itemList} totalPrice={totalPrice} />
			</CartContainer>
		</>
	);
}

const CartContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	height: 800px;
	width: 1400px;
	margin-top: 80px;
	margin-left: auto;
	margin-right: auto;
`;
