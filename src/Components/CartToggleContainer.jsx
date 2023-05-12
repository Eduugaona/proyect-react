import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleCart, removeAllProduts } from '../redux/reducers/cartSlice'
import { CartProductsRendered } from './CartProducts'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const CartContainer = styled.div`
  top: 0px;
  right: ${props => props.right ? '0px' : '-500px'};
  position: fixed;
  min-height: 50vh;
  max-height: 80vh;
  width: 300px;
  background-color: rgba(1, 1, 1, 0.966);
  transition: 1s all;
  overflow-y: scroll;

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`

export const CloseCartStyled = styled(AiOutlineClose)`
  cursor: pointer;
  color: #f1e9f1e7;
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  font-weight: 700;
`

const DeleteAllButton = styled.button`
  width: 80%;
  background-color: #f18899;
`

const EmptyCartStyled = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fdfdfdea;
`
const PriceCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  padding: 30px 5px;

  p{
    color: #ebe0e0;
    font-size: 20px;
    font-weight: 700;
  }
`

const CartToggleContainer = () => {

  const navigate = useNavigate()

  const togleCart = useSelector((state) => state.cart.toggleCartON)
  const productsInCart = useSelector((state) => state.cart.cartItems)
  const totalPrice = useSelector((state) => state.cart.totalCost)
  
  const dispatch = useDispatch();

  return (
    <CartContainer right = {togleCart}>
      <CloseCartStyled onClick={ () => dispatch(toggleCart(!togleCart))}></CloseCartStyled>
      
        {productsInCart.length === 0 ? 
          <EmptyCartStyled>
            EL CARRITO ESTA VACIO
          </EmptyCartStyled> 
          :
          <section>       
            <h2>carrito</h2>
            <CartProductsRendered/>
            <PriceCartContainer>
            <p>Total:</p>
            <p>${totalPrice}</p>
          </PriceCartContainer>
          <DeleteAllButton onClick={() => dispatch(removeAllProduts([]))}>VACIAR CARRITO</DeleteAllButton>
          <button onClick={ () => navigate('/checkout')} >CONTINUAR COMPRA</button>
        </section>}
      
    </CartContainer>
  )
}

export default CartToggleContainer