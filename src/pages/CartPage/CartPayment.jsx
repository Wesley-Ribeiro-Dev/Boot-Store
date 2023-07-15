import { styled } from "styled-components";
import arrow from "../../assets/iconmonstr-arrow-16.png";

export default function CartPayment() {
	return (
		<CartPaymentContainer>
			<PayButtonShadow>
				<PayButton>
					<h1>F I N A L I Z A R</h1>
					<img src={arrow} alt="proximo" />
				</PayButton>
			</PayButtonShadow>
		</CartPaymentContainer>
	);
}

const CartPaymentContainer = styled.div`
	width: 400px;
`;

const PayButton = styled.button`
	position: absolute;
	top: 12px;
	left: -12px;

	width: 100%;
	height: 50px;

	display: flex;
	justify-content: space-between;

	outline: none;
	border: none;
	background-color: black;

    cursor: pointer;
    transition: all 0.5s;

	h1 {
		position: absolute;
		top: 8px;
        left: 18px;
		font-family: "Bebas Neue", sans-serif;
		font-size: 32px;
		color: white;
	}

    img{
        width: 48px;
        position: absolute;
        top: 2px;
        right: 18px;
    }

    &:hover{
        transition: all 0.5s;
        background-color: rgb(50, 50, 50);
    }
`;

const PayButtonShadow = styled.div`
	position: relative;

	width: 100%;
	height: 50px;
	background-color: white;
	border: solid 2px black;
`;
