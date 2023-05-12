import React from "react";
import styled from "styled-components";
import CardProductCheckOut from "./CardProductCheckOut";
import { removeAllProduts } from "../../redux/reducers/cartSlice";
import  {useDispatch}  from "react-redux";

const CheckOutProductsSection = styled.section`
padding: 40px 0px;
  width: 100%;
  margin: 0 auto;
  background-color: #2e2d2d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  p,h2{
    color:white
  }
`

const CheckOutProductsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #2e2d2d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media(max-width: 700px) {
    width: 100%;
  }
`

const DeleteButtonCheckOut = styled.button`
  width: 20%;
  padding: 10px 20px;
  border-radius: 10px;

  @media(max-width: 700px){
    width: 70%;
  }
`
const CheckOutProducts = ({cartItems, totalCost}) => {

  const dispatch = useDispatch();
  

  return (
    <CheckOutProductsSection>
      <h2>Tus Productos</h2>
      <CheckOutProductsContainer>
          {cartItems.map((item) =>
            <CardProductCheckOut key={item.id} {...item}/>
          )}
      </CheckOutProductsContainer>
      <DeleteButtonCheckOut onClick={() => dispatch(removeAllProduts([]))}>CONFIRMAR COMPRA</DeleteButtonCheckOut>
    </CheckOutProductsSection>
  );
};

export default CheckOutProducts;
