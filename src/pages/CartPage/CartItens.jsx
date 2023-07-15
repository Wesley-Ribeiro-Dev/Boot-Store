import { styled } from "styled-components";
import xis from "../../assets/cross-svgrepo-com.svg";

export default function CartItens({}) {
	return (
		<ItensContainer>
			<h1>Seu Carrinho</h1>
			<p>
				TOTAL (X produtos) <span className="bold">R$XXX,XX</span>
			</p>
			<Item />
			<Item />
		</ItensContainer>
	);
}

const ItensContainer = styled.div`
	display: flex;
	flex-direction: column;
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

function Item() {
	return (
		<ItemDiv>
			<img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/154ba20c98a14e94b543ae4b013fd434_9366/HG7787_165_HG7787_01_standard.jpg.jpg?sh=364&strip=false&sw=364" />
			<ItemInfo>
				<div>
					<p>TOCA PRA COBRIR CARECA</p>
					<p>TAMANHO M/G</p>
				</div>
				<select>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</ItemInfo>
			<Price>
				<p>R$666,66</p>
			</Price>
			<Cancel>
				<img src={xis} alt="cancelar" />
			</Cancel>
		</ItemDiv>
	);
}

const ItemDiv = styled.div`
	height: 200px;
	width: 100%;
	display: flex;
	margin-bottom: 30px;
	border: 1px solid gray;
	img {
		width: 200px;
	}
	p {
		font-size: 14px;
	}
`;

const ItemInfo = styled.div`
	font-family: "Rubik", sans-serif;

	font-weight: 400;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px;

	select {
		font-size: 22px;
		text-align: center;
		width: 60px;
		height: 50px;
		background-color: white;
		border: 1px solid gray;
	}
`;

const Price = styled.div`
	margin: 20px;
`;

const Cancel = styled.div`
	margin: 20px;
	img {
		width: 14px;
		cursor: pointer;
	}
`;
