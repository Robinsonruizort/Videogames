import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

const CardVideogame = ({name, genres, image, id}) => {

return (
    <div>
    <div className={style.Card}>
        <h1 className={style.name}>{name}</h1>
        <img className={style.img} src={image} alt={name} />
        <h3>{genres}</h3>
        <Link className={style.seeMore} to={`/videogames/${id}`}>
        <h3>See more</h3>
        </Link>
    </div>
    </div>
);
}

export default CardVideogame;