import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkStyled = styled(Link)`
  color: #f5b3b3;
`

const NavbarContainerStyled = styled.div`
    gap: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   

    Link{
      height: 100%;
      color: white;
      padding: 5px;
      transition: 1s ease-in-out;

  &:hover{
    border-bottom: 1px solid white;
    transition: 1s ease-in-out;
  }

    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

    }

    @media(max-width:700px){
    .links{
        position: absolute;
        padding: 30px 20px;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 50px;
        background-color: rgba(3,5,2);
        height: 100vh;
        font-size: 30px;
        transition: 0.8s all;
        text-shadow: -2px 2px 10px rgba(251,12,250,1);

    }

    .linksOff{
        position: absolute;
        padding: 30px 20px;
        top: 0;
        left: -300px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 50px;
        background-color: rgba(3,5,2);
        height: 100vh;
        font-size: 30px;
        transition: 0.8s all;
    }
    
    }
`





export const NavBar = ({ClickMenuOn}) => {
 

  return (
    <NavbarContainerStyled>
        <div  className = {ClickMenuOn ? 'links' : 'linksOff' }>
            <LinkStyled to={"/"}>Home</LinkStyled>
            <LinkStyled to={"/sobre-nosotros"}>Sobre Nosotros</LinkStyled>
            <LinkStyled to={"/tienda"}>Tienda</LinkStyled>
            <LinkStyled to={"/checkout"}>Check Out</LinkStyled>
            
        </div>
        
    </NavbarContainerStyled>
  )
}
