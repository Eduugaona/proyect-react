import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice'
import useState from 'react-hook-use-state'



const ProductListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  
  width: 100%;
  background-color: #0f100f;

   
    p{
        font-size: 20px;
        color: black;
    }

.product-added{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fafafa;
  font-size: 20px;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #2fe92f;
  transition: all 0.5s;
}

.not-product-added{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-align: center;
  color: #fafafa;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: -50px;
  background-color: #2fe92f;
  transition: all 0.5s;
}

`



const ProductsCard = styled.div`
border-radius: 10px;
display: flex;
overflow: hidden;
align-items: center;
flex-direction: column;
height: 350px;
min-width: 200px;
width: 250px;
background-color: #0f0f0e;
-webkit-box-shadow: 12px 16px 52px -19px rgba(0,0,0,0.75);
-moz-box-shadow: 12px 16px 52px -19px rgba(0,0,0,0.75);
box-shadow: 12px 16px 52px -19px rgba(0,0,0,0.75);
  
  img{
    height: 100%;
    width: 100%;
    transition: all 1.5s;
    :hover{
      transform: scale(1.1);
    }
    
  }

  p{
    margin-bottom: 0;
    color: pink;
    font-weight: 700;
  }

  span{
    overflow: hidden;
    height: 70%;
    width: 100%;
  }

  div{
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  button{
    border-radius: 10px;
    background-color: #a4767d;
    color:white;
    padding: 5px 10px;

    :hover{
      background-color: #eba1ac;
    }
  }
`

export const ProductList = () => {
  const [modalProduct, setModalProduct] = useState(false)
  let productList = useSelector ( (state) => state.products.productsList)
  const categori = useSelector((state) => state.category.selectedCategorie)
  const dispatch = useDispatch();

  const modalFunc = () => {
    setModalProduct(!modalProduct);
    setTimeout(() => {
      setModalProduct(false)
    }, 1000);
  }

  let productListFiltered = categori ? productList.filter( producto => 
    producto.categoria === categori
  ) : productList;

  return (
    <ProductListContainer>
      
      
        {productListFiltered.map( (product) => {
          return <ProductsCard key={product.id}> 
          <span>
            <img src={product.image} alt={product.id}/>
          </span>  
          <div>
              <p>{product.description}</p>
              <p>${product.precio}</p>
              <button onClick={ () => { dispatch(addToCart(product)) ; modalFunc() }}>Agregar al carrito</button>
          </div>  
          </ProductsCard>
         

        })}
      <div className= { modalProduct ? 'product-added' : 'not-product-added'}> AGREGADO AL CARRITO </div>
    </ProductListContainer>
  )
}
