import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesName } from "../../Redux/actions";
import style from "./searchBar.module.css";
import { useSelector } from "react-redux";



const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const videogames = useSelector((state) => state.videogames);

    const handleInputChage = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getVideogamesName(name));
        setName("");
        // console.log("Search button clicked");

        const GameExist = videogames.some((videogame) => videogame.name.toLowerCase () === name.toLowerCase());

        if(!GameExist) {
            alert(`${name} was not found in the system`)
        }

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