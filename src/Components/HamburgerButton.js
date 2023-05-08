import React from 'react'
import { MdViewHeadline } from "react-icons/md";
import styled from 'styled-components';

const HamburgerContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 700px){
        display: none;
    }

`


export const HamburgerButton = () => {

    




  return (
    <HamburgerContainer>
        <MdViewHeadline color='white' fontSize='40px'/>
    </HamburgerContainer>
  )
}
