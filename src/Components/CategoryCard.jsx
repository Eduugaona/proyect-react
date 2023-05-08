import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../redux/reducers/categoriesSlice';


const CategoriesCard = styled.div`
padding: 10px 5px;
  border-radius: 20px;
  width: 200px;
  background-color:${({selected}) => selected ? 'black' : 'grey'  }; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &&:hover{
    background-color: #3e3a3a;
  }


  h2{
    color:#fafa;
    font-size: 30px;
  }

`



const CategoryCard = ({nombre, id,categoria}) => {

    const categori = useSelector((state) => state.category.selectedCategorie)
    const dispatch = useDispatch()

  return (
    <CategoriesCard
        selected = {categoria === categori}
        onClick={ () => dispatch(selectedCategory(categoria)) }
    >
        <h2>{nombre}</h2>
    </CategoriesCard>
  )
}

export default CategoryCard;