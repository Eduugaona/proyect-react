import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../Components/ProductList'
import Categorias from '../Components/Categorias'

const TiendaContainer = styled.section`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: beige;

    h2{
        color: white;
    }
    
`

const Tienda = () => {
  return (
    <TiendaContainer>
        <Categorias/>
        <ProductList/>
    </TiendaContainer>
  )
}

export default Tienda