import React from 'react'
import styled from 'styled-components'
import HeroImage from '../Utilities/Images/imagenNeon2.jpg'

const HeroContainer = styled.section`
    background-image: linear-gradient(to right, rgba(230,150,150,0.1), rgba(0,0,0,1) ) ,url(${HeroImage});
    width: 100%;
    max-width: 1500px;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-end;
`
const HeroDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: flex-start;
    

    h1{
        font-family: 'Orbitron', sans-serif;
        font-size: 70px;
        font-weight: 700;
        color: pink;
        text-align: center;
    }

    p{
        color: white;
        font-size: 25px;

    }

    @media(max-width: 700px){
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`

const HeroButton = styled.button`
padding: 5px 10px;
    font-size: 30px;
    cursor: pointer;
    border-radius: 10px;
    font-weight:700;
    background-color: black;
    border: 1px solid violet;
    color: pink;

`


export const Hero = () => {
  return (
    <HeroContainer>
        <HeroDescription>
            <h1>Ideas En Neón</h1>
            <p>Transformamos tus ideas en Neon</p>
            <HeroButton>Ordena el Tuyo</HeroButton>
        </HeroDescription>
    </HeroContainer>
  )
}
