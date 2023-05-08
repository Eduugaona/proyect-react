import React from "react";
import styled from "styled-components";
import CardProductCheckOut from "./CardProductCheckOut";
import { removeAllProduts } from "../../redux/reducers/cartSlice";
import  {useDispatch}  from "react-redux";

const CheckOutProductsContainer = styled.div`
    width: 50%;
  background-color: #2e2d2d;
  display: flex;
  flex-direction: column;

  p,h2{
    color:white
  }
`;

const CheckOutProducts = ({cartItems, totalCost}) => {

  const dispatch = useDispatch();
  

  return (
    <CheckOutProductsContainer>
      <h2>Tus Productos</h2>
      {cartItems.map((item) =>
        <CardProductCheckOut key={item.id} {...item}/>
      )}
      <button onClick={() => dispatch(removeAllProduts([]))}>borrar todo</button>
    </CheckOutProductsContainer>
  );
};

export default CheckOutProducts;
