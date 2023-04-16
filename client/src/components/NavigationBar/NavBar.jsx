import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import { resetVideogame } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";


const NavBar = () => {

    const dispatch = useDispatch()

    const handleReset = (e) => {
        dispatch(resetVideogame())
    }
    
    return (
        <div className={style.all}>
            <button className={style.btn}>
            <Link  className={style.link} to={"/about"}>About</Link>
            </button >
            <button className={style.btn}>
            <Link onClick={handleReset} className={style.link} to={"/home"}>Home</Link>
            </button>
            <button className={style.btn}>
            <Link  className={style.link} to={"/videogames/create"}>Create VideoGame</Link>
            </button>
        </div>
    )
}

export default NavBar;