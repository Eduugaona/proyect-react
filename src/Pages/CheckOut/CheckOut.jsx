import React from 'react'
import styled from 'styled-components'
import CheckOutForm from '../../Components/CheckOut/checkOutForm'
import CheckOutProducts from '../../Components/CheckOut/checkOutProducts'
import { useSelector } from 'react-redux'


const CheckOutContainer = styled.section`
margin-top: 100px;
    min-height: 800px;
    width: 100vw;
    max-width: 1500px;
    background-color: #c2b8b8;
    display: flex;
`

const CheckOut = () => {
  
    const {cartItems, totalCost} = useSelector((state) => state.cart)

  return (
    <CheckOutContainer>
        <CheckOutForm/>
        <CheckOutProducts
        cartItems={cartItems}
        totalCost={totalCost}
        />
    </CheckOutContainer>
  )
}

export default CheckOut