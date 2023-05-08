import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const FooterContainer = styled.footer`
    padding: 100px 20px;
    text-align: center;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
    max-width: 1500px;
    background-color: #0f0f0f;
    display: flex;
    justify-content: space-evenly;
    align-items: start;

    h2{
      color: pink;
      font-weight: 700;

    }
`

const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;

  div{
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 15px;
    
  }

  a{
    text-decoration: none;
    color: pink;
  }
`


export const Footer = () => {
  return (
    <FooterContainer>
       <FooterItems>
          <h2>Categorias</h2>
          <div>
            <a href='/'>Nosotros</a>
            <a href='/'>Nuestros Productos</a>
            <a href='/'>Nuestros Clientes</a>
            <a href='/'>Ofertas Especiales</a>
          </div>
       </FooterItems>
       <FooterItems>
       <h2>Contactanos</h2>
          <div>
            <a href='/'><i><FaWhatsapp/></i> 1124075619</a>
            <a href='/'><i><FaEnvelope/></i> ideasenneon@hotmail.com</a>
            
          </div>
       </FooterItems>
       <FooterItems>
       <h2>Seguinos En Las Redes</h2>
          <div>
            <a href='/'><i><FaInstagram/></i> ideas_en_neon</a>
            
          </div>
       </FooterItems>
    </FooterContainer>
  )
}
