import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={style.all}>
            <button className={style.btn}>
            <Link  className={style.link} to={"/about"}>About</Link>
            </button >
            <button className={style.btn}>
            <Link  className={style.link} to={"/home"}>Home</Link>
            </button>
            <button className={style.btn}>
            <Link  className={style.link} to={"/videogames/create"}>Create VideoGame</Link>
            </button>
        </div>
    )
}

export default NavBar;