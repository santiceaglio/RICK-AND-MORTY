import React from 'react'
import {Link} from "react-router-dom"
import styles from "../assets/styles/components/Card.module.css"
import Favorites from '../views/FavoritesPage'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from "axios";

const Card = ({id,
  name,
  species,
  gender,
  image,
  origin,
  status}) => {
  
  const dispatch= useDispatch();

  const user = useSelector((state)=> state.user);
  
  const [isFav, setIsFav] = useState(false);
   
  //  const {pathname}=useLocation();

  const addFavorite=(character, user)=>{
 axios.post(`/favorite?idUser=${id}`, character)
 .then((response)=>{
  console.log("se agrego a favoritos")
 })
 .catch((error)=>{
  console.log(error)
 })
  }

  const removeFavorite=(id)=>{
    axios.delete(`/favorite/${id}`)
    .then((response)=>{
      console.log("se elimino de favoritos")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ 
            id,
            name,
            species,
            gender,
            image,
            origin,
            status

         }, user);
      }
   }
  return (
    <div>
      {
            isFav ? (
               <button className={styles.favorite} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.favorite} onClick={handleFavorite}>🤍</button>
            )
         }
      <div className={styles.contentImage}>
        <img src={image} alt={name} title="Haz click en el nombre"/>
        </div> 
        <Link to={`/detail/${id}`}>{name}</Link>        
        <h3>{id}</h3>
      
      </div>
  )
}

export default Card
