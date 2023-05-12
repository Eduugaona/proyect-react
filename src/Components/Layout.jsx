import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const LayoutGeneral = styled.div`
  
    width: 100vw;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    background-color: #0f100f;
`

const Layout = ({children}) => {
  const {pathname} = useLocation();
  useEffect( () => {
    window.scrollTo(0,0)
  }, [pathname])

  return (
  
      <LayoutGeneral>
        {children}
    </LayoutGeneral>
    
    
  )
}

export default Layout