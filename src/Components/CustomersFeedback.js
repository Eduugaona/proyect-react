import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Clientes} from '../Data/CustomersData'
import styled from 'styled-components';


const CarouselStyled = styled(Carousel)`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 700px){
      width: 90%;
    }

    img{
        width: 100%;
        height: 500px;
        border-radius: 5px;
    }
`


export const CustomersFeedback =() => {
  return (
    <CarouselStyled>
        {Clientes.map( (cliente) => 

            <Carousel.Item interval={800} key={cliente.id}> <img
                src={cliente.imagen}
                alt="First slide"/> 
            
            </Carousel.Item> 
             )}

    </CarouselStyled>
  );
}

