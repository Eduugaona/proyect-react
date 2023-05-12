import React from 'react'
import styled from 'styled-components'
import CheckOutProducts from '../../Components/CheckOut/checkOutProducts'
import { useSelector } from 'react-redux'


const CheckOutContainer = styled.section`
    margin-top: 100px;
    min-height: 500px;
    width: 100vw;
    max-width: 1500px;
    background-color: #2e2d2d;
    display: flex;
`

const CheckOut = () => {
  
    const {cartItems, totalCost} = useSelector((state) => state.cart)

  return (
    <CheckOutContainer>
        <CheckOutProducts
        cartItems={cartItems}
        totalCost={totalCost}
        />
    </CheckOutContainer>
  )
}

export default CheckOut