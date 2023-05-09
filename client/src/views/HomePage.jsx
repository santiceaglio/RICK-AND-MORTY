import React, { useEffect } from 'react'

import AllFilters from '../components/AllFilters'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'

import styles from "../assets/styles/components/views/Home.module.css"
import { useDispatch, useSelector } from 'react-redux'
import {getAllCharacters, generateCopy} from '../redux/actions'
import { useState } from 'react'

const HomePage = () => {

  const stateGlobal = useSelector((state) => state.characters);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [])

  useEffect(() =>{
    dispatch(generateCopy());
  }, [stateGlobal])

  return (
    <div className={styles.content}>
      <div className={styles.contentFilter}>
        <AllFilters />
        <SearchBar />

      </div>
      <h1>All Characters</h1>
      <Pagination />
    </div>
  )
}

export default HomePage
