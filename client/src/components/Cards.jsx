import React from 'react'
import styles from "../assets/styles/components/Cards.module.css"
import { all } from 'axios'
import Card from "./Card"

const Cards = ({ allCharacters }) => {
  return (
    <div>
      { allCharacters.length ? (allCharacters.map(({id,
            name,
            species,
            gender,
            image,
            origin,
            status})=>{
        return(
          <Card key={id}
          id={id}
          name={name}
          image={image}
          species={species}
          gender={gender}
          origin={origin}
          status={status}
          />
        ) 
      })):(<h2>No hay personaje...</h2>)}
    </div>
  )
}

export default Cards