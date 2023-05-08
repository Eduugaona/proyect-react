import React from 'react'
import styled from 'styled-components'

const CardProduct = styled.div`
    width: 90%;
    padding: 10px 30px;
    margin: 0 auto;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: space-between;
    background-color: #121216;

    img{
        height: 120px;
        width: 200px;
    }

    p,h2{
        font-size: 20px;
    }
`

const CardProductCheckOut = ({id,image,title,precio}) => {

  return (
    
        
            <CardProduct>
                <img src={image} alt={id}/>
                <h2>{title}</h2>
                <p>${precio}</p>
            </CardProduct>
    
  )
}

export default CardProductCheckOut