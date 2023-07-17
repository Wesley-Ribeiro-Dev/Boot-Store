import { styled } from "styled-components";
import xis from "../../assets/cross-svgrepo-com.svg";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;

function updateList(setItemList, setTotalPrice, setTotalQuantity) {
	axios
		.get(`${VITE_API_URL}cart`)
		.then((res) => {
			setItemList(res.data);

			let auxForTotal = 0;
			let auxForQuantity = 0;
			res.data.forEach((item) => {
				auxForTotal += item.quantity * item.price;
				auxForQuantity += Number(item.quantity);
			});
			setTotalPrice(auxForTotal);
			setTotalQuantity(auxForQuantity);
		})
		.catch((res) => {
			alert(res);
		});
}

export default function CartItens({
	itemList,
	setItemList,
	totalPrice,
	setTotalPrice,
	totalQuantity,
	setTotalQuantity,
}) {
	useEffect(() => {
		updateList(setItemList, setTotalPrice, setTotalQuantity);
	}, []);

	if (itemList.length == 0) {
		return (
			<ItensContainer>
				<h1>Carrinho Vazio</h1>
			</ItensContainer>
		);
	} else
		return (
			<ItensContainer>
				<h1>Seu Carrinho</h1>
				<p>
					TOTAL ({totalQuantity} produtos){" "}
					<span className="bold">
						R${totalPrice.toFixed(2).replace(".", ",")}
					</span>
				</p>
				{itemList.map(({ _id, name, price, image, quantity }) => {
					return (
						<Item
							key={_id}
							_id={_id}
							name={name}
							price={price}
							image={image}
							quantity={quantity}
							setItemList={setItemList}
							setTotalPrice={setTotalPrice}
							setTotalQuantity={setTotalQuantity}
						/>
					);
				})}
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

function Item({
	_id,
	name,
	price,
	image,
	quantity,
	setItemList,
	setTotalPrice,
	setTotalQuantity,
}) {
	const [quantityShown, setQuantityShown] = useState(quantity);
	return (
		<ItemDiv>
			<img src={image} />
			<ItemInfo>
				<div>
					<p>{name}</p>
				</div>
				<select
					value={quantityShown}
					onChange={(e) => {
						axios.put(`http://localhost:5000/cart/${_id}`, {
							quantity: e.target.value,
						});

						updateList(setItemList, setTotalPrice, setTotalQuantity);

						setQuantityShown(e.target.value);
					}}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
					<option value={7}>7</option>
					<option value={8}>8</option>
					<option value={9}>9</option>
				</select>
			</ItemInfo>
			<Price>
				<p>R${(quantityShown * price).toFixed(2).replace(".", ",")}</p>
			</Price>
			<Cancel>
				<img
					src={xis}
					alt="cancelar"
					onClick={() => {
						axios.delete(`http://localhost:5000/cart/${_id}`);
						console.log("p");
						updateList(setItemList, setTotalPrice, setTotalQuantity);
					}}
				/>
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
