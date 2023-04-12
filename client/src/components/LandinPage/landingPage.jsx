import React from "react";
import { Link } from "react-router-dom";
import style from "./landingPage.module.css"


const LandingPage = () => {
return (
    <div>
        <div className={style.information}>
        <h1 className={style.title}>Welcome! Are you ready to discover some Games?</h1>
        <br />
        <button className={style.button}>
            <Link className={style.link} to="/home">Lets start</Link>
        </button>
        </div>
    </div>
)
}

export default LandingPage;