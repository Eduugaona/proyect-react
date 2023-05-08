import React from 'react'
import styled from 'styled-components'

const SobreNosotrosContainer = styled.section`
    margin-top: 100px;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    padding: 40px 100px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: #0f100f;


    h2{
      color: #fafa;
      font-size: 40px;
      text-align: center;
    }

    p{
      color: #f5b3b3;
      font-size: 1.5em;
      text-align: center;
    }

`

const SobreNosotros = () => {
  return (
    <SobreNosotrosContainer>
        <h2>Especialistas en Rótulos Luminosos y Placas de Empresa</h2>
        <article>
            <p>En Rotula Tú Mismo somos especialistas en rótulos luminosos, placas de empresa grabadas en metal, placas de metacrilato, letras corpóreas, banderolas luminosas, carteles y letreros sin luz, y rotulación de vehículos entre otros servicios. 
              En nuestra tienda online ponemos a tu disposición un personalizador de rótulos virtual para que puedas confeccionar tú mismo el rótulo o la placa a tu medida y según las necesidades de tu empresa. 
              Llevamos casi 10 años ofreciendo calidad al mejor precio y rótulos en Valencia. Más de 500 clientes nos avalan. 
              Gracias por confiar en nosotros
            </p>
        </article>

        <article>
          <p>
              Misión
              Vender rótulos a través de internet con un proceso de compra eficiente y rápido que permita adquirir tus rótulos en el menor tiempo posible, sin errores de fabricación y de una forma intuitiva.
              Nuestro cliente: Empresas y partners profesionales que re venden nuestros productos. 
          </p>
        </article>

        <article>
          <p> Visión 
              Queremos ser la mejor y mayor empresa de fabricación de rótulos a nivel Europeo, ofreciendo siempre el mayor surtido, precio, calidad y tiempo de entrega.
          </p>
        </article>


    </SobreNosotrosContainer>
  )
}

export default SobreNosotros