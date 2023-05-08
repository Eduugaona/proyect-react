import React from 'react'
import styled from 'styled-components'

const DescriptionContainer = styled.section`
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 200px 0px;

`

const DescriptionText = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    flex-direction: column;


    h2{
        color: #fafafa;
        font-size: 35px;
        font-weight: 700;
    }

    p{
        color: #fafafa;
        font-size: 20px;
        text-align: center;
        line-height: 2;
    }

`

export const Description = () => {
  return (
    <DescriptionContainer>
        <DescriptionText>
            <h2>¿Por Qué Usar Luces De Neon?</h2>
            <p>NeonLED es un sistema de luz flexible, duradero y de bajo consumo con una gran versatilidad para diferentes usos.
             Ofrece grandes ventajas diferenciales como medio publicitario y decorativo. Un sistema útil para captar la atención de sus clientes, generar experiencias y destacar su marca.
            Óptimo como sustento de cartelería en vía pública, interiores, eventos, fiestas. Ideal para decoraciones de todo tipo.</p>
        </DescriptionText>
    </DescriptionContainer>
  )
}
