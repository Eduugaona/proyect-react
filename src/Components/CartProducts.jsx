import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeItemToCart, addItemToCart,removeItem } from '../redux/reducers/cartSlice'
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import {AiFillMinusCircle} from 'react-icons/ai'


const CardProductStyled = styled.div`
position: relative;
  display: flex;
  padding: 20px 5px;
  width: 100%;
  border: solid 1px black;
  background-color: #efe8e8;
  color: black;
  gap: 30px;
  align-items: center;

  h2{
    font-size: 15px;
  }
  

  img{
    width: 100px;
    height: 50px;
  }

  span{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    text-align: center;
  }

`

const PlusButton = styled(AiFillPlusCircle)`
    font-size: 20px;
    cursor: pointer;
`

const MinusButton = styled(AiFillMinusCircle)`
    font-size: 20px;
    cursor: pointer;
`


const CloseButton = styled(BsFillTrashFill)`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 0;
  font-size: 20px;
`
const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p{
    font-size: 20px;
    align-self: center;
    margin-bottom: 0;
  }
`


export const CartProductsRendered = () => {

    const cartItem = useSelector( (state) => state.cart.cartItems) 
    const dispatch = useDispatch()
   

  return (<>
    {cartItem.map( (item) => {
        return <CardProductStyled key={item.id}>
            <img src={item.image} alt={item.id}/>
            <span>
                <h2>{item.title}</h2>
                  <QuantityContainer>
                      <MinusButton onClick={ () => dispatch(removeItemToCart(item.id))}> </MinusButton>
                      <p>{item.quantity}</p>
                      <PlusButton onClick={ () => dispatch(addItemToCart(item.id))}> </PlusButton>
                  </QuantityContainer>    
            </span>
                <p>${item.precio}</p>
            
            <CloseButton onClick={() => dispatch(removeItem(item.id))}></CloseButton>
        </CardProductStyled>


    } )}
  </>)
}

