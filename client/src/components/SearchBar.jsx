import React from 'react'
import styles from "../assets/styles/components/SearchBar.module.css"
import { useDispatch } from 'react-redux'
import { getCharacterByName } from '../redux/actions'
import { useState } from 'react'

const SearchBar = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = useState("");

  const handleValue = (event) => {
		setSearch(event.target.value);
	};

  const handleSearch=(event)=>{
		event.preventDefault();		
		dispatch(getCharacterByName(search));
	}

  return (
    <div className={styles.content}>
    <input type="text" placeholder="..Name" className={styles.input} onChange={handleValue}/>
    <button className={styles.button} onClick={handleSearch}>Search</button>
        </div>
  )
}

export default SearchBar
