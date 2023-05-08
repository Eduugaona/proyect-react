import React from 'react'
import styled from 'styled-components'
import LogoNeon from '../Utilities/Logos/logo-neon.png'

export const LogoStyled = styled.img`
    height: ${props => props.tamaño};

`

export const Logo = ({tamaño}) => {
  return (
    <LogoStyled  tamaño = {tamaño}  src= {LogoNeon}/>
  )
}
