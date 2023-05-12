import {React} from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { MdViewHeadline } from "react-icons/md";
import { BsCart2 } from 'react-icons/bs';
import CartToggleContainer from './CartToggleContainer';
import  {toggleMenuOn} from '../redux/reducers/toggleMenuSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../redux/reducers/cartSlice'





const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    margin: 0 auto;
    width: 100vw;
    max-width: 1500px;
    height: 100px;
    background-color: rgba(10,10,10,0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;

`

const HamburgerContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 700px){
        display: none;
    }

`

const NavBarContainer = styled.div`
    display: flex;
    gap: 10px;

`

const CartIconContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    
    
`

const IconCart = styled(BsCart2)`
  cursor: pointer;
`




export const Header = () => {


    const dispatch = useDispatch()
    const Menu = useSelector((state) => state.toggleMenu.toggleMenuOn)
    console.log(Menu)


  return (
    <HeaderContainer>
      <Logo tamaño = {'100%'}/>
      
      <NavBarContainer>  
          <HamburgerContainer onClick={ () => dispatch(toggleMenuOn(!Menu))}>
              <MdViewHeadline color='white' fontSize='40px'/>
          </HamburgerContainer>
          <NavBar/>
          <CartIconContainer onClick={ () => dispatch(toggleCart(true))  }>
              <IconCart fontSize='30px' color='rgba(250,250,250,0.9)'/>
          </CartIconContainer>
          <CartToggleContainer/>
      </NavBarContainer>
      
    </HeaderContainer>
  )
}
