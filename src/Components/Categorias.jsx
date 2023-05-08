import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'

const CategoryContainer = styled.div`
  padding: 10px 20px;
  flex-wrap: wrap;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: #0f100f;

`

const Categorias = () => {

const Categorias = useSelector( (state) => state.category.categories)

  return (
    <CategoryContainer>
      {Categorias.map(( category ) => (
        <CategoryCard key={category.id} {...category}/>
      ))}
    </CategoryContainer>
  )

      }
export default Categorias