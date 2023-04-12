import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesName } from "../../Redux/actions";
import style from "./searchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const handleInputChage = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getVideogamesName(name));
        setName("");
        console.log("Search button clicked");
    };
          
    return (
        <div className={style.search}>
            <input onChange={handleInputChage}
            type="text" 
            value={name}
            placeholder="Search by name"/>
            <button className={style.btn} onClick={handleSubmit} type="submit">Search</button>
        </div>
    )
}

export default SearchBar;