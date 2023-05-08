import React from 'react'
import styled from 'styled-components'
const LayoutGeneral = styled.div`
  
    width: 100vw;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    background-color: #0f100f;
`

const Layout = ({children}) => {
  return (
  
      <LayoutGeneral>
        {children}
    </LayoutGeneral>
    
    
  )
}

export default Layout