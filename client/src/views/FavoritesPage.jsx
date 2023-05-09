



import React from 'react'
import styles from "../assets/styles/components/views/FavoritesPage.module.css"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Cards from '../components/Cards'
import {getAllFavorites} from '../redux/actions.js'

const FavoritesPage = () => {

  const dispatch=useDispatch();

  const allFavorites=useSelector((state)=> state.favorites);

  useEffect(()=> {
    dispatch(getAllFavorites());
  }, [allFavorites]);


  return (
    <div>
      <h1>Favorite's Page
        
      </h1>
      <Cards allCharacters={allFavorites} />
    </div>
  )
}

export default FavoritesPage
