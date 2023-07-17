import { ProductCardContainer } from "./styled";

export default function ProductCard ({ item }) {
    const {name, price, image} = item;
    return (
        <ProductCardContainer>
            <img src={image} alt={name} />
            <div>
                <p>{name}</p>
                <p>R${price}</p>
            </div>
        </ProductCardContainer>
    );
}