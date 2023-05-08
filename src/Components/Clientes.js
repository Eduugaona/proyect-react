import React from 'react'
import styled from 'styled-components'
import { CustomersFeedback } from './CustomersFeedback'

const CustomersContainer = styled.section`
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: #fafafa;
        font-size: 35px;
        font-weight: 700;
    }
`

export const Clientes = () => {
  return (
    <CustomersContainer>
        <h2>Clientes</h2>
        <CustomersFeedback/>
    </CustomersContainer>
  )
}
