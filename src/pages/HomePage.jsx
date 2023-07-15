import React from 'react'
import Header from '../components/Header'
import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { UserDataContext } from "../context/UserDataContext";

const products = [
  {name: "Tenis 1", price :  "150", image:"https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f598723ec37e440f872ead1d017eb2fb_9366/tenis-racer-tr21.jpg"},
  {name: "Tenis 2", price :  "250", image:"https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/af300599403b4938a8cbaf0e0115fc21_9366/tenis-alphaboost-v1.jpg"},
  {name: "Tenis 3", price :  "350", image:"https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/25ca905daa6d4bee8cd4af8f00775b04_9366/tenis-runfalcon-3.jpg"},
  {name: "Tenis 4", price :  "450", image:"https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8a358bcd5e3d453da815aad6009a249e_9366/tenis-superstar.jpg"}
];

export default function HomePage() {
  //const [products, setProducts] = useState([]);

  const url = `http://localhost:5000`;

  // useEffect(() => {
  //   const request = axios.get(`${url}/home`);

  //   request.then(r => {
  //     setProducts(r.data);
  //   });

  //   request.catch(r => {
  //     alert(r.response.data);
  //   });
  // }, []);

  function addToCart(){
    let conf = confirm("Deseja adicionar o item ao carrinho?");

    if(conf){
      alert("Adicionado ao carrinho!");
    }
  };

  return (
    <>
      <Header />
      <HomeContainer>
        <ProductsContainer>
          {products.map(p => (
            <Product onClick={addToCart}>
              <img src={p.image}></img>
              <ProductInfo>
                <h1>{p.name}</h1>
                <h2>{Number(p.price).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</h2>
              </ProductInfo>
            </Product>
            )
          )}
        </ProductsContainer>
      </HomeContainer>
    </>
  )
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  justify-content: flex-start;
  align-items: center;
`;

const ProductsContainer = styled.ul`
  flex-grow: 1;
  width: calc(100vw - 35%);
  display: flex;
  justify-content: center;
  margin-top: 70px;
  gap: 2px;
  flex-flow: row wrap;
`;

const Product = styled.li`
  box-sizing: border-box;
  width: calc(25% - 2px);
  min-width: 150px;
  height: 45%;
  min-height: 200px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  
  img{
    max-height: 300px;
    width: 100%;
    object-fit: contain;
  }

  &:hover{
    cursor: pointer;
    border: 1px solid black;
    opacity: 0.7;
  }
`;

const ProductInfo = styled.div`
  height: auto;
  min-height: 50px;
  width: 100%;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  font-family: 'Bebas Neue', sans-serif;

  h1 {
    font-size: 25px;
    color: black;
  }

  h2 {
    font-size: 20px;
    color: grey;
  }
`;