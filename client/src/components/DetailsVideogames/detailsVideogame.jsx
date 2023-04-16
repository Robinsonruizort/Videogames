import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameId, resetVideogame } from "../../Redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./detailsVideogame.module.css";


const VideogameDetail = () => {

const dispatch = useDispatch()

const { id } = useParams();
useEffect(()=>{
    dispatch(getVideogameId(id))
}, [dispatch, id])


const handleReset = (e) => {
    dispatch(resetVideogame())
}

const videogamesDetail = useSelector((state) => state.detail)
console.log(videogamesDetail);
    return (
        <div className={style.general}>
            <div className={style.Card}>
                <div className={style.information}>
                <h1>Name: {videogamesDetail.name}</h1>
                <h2>Platforms: {videogamesDetail.platforms}</h2>
                <h2>Description: {videogamesDetail.description}</h2>
                <h2>Release Date: {videogamesDetail.releaseDate}</h2>
                <h2>rating: {videogamesDetail.rating}</h2>
                <h2>genres: {videogamesDetail.genres}</h2>
                </div>
                <img className={style.img} src={videogamesDetail?.image} alt={videogamesDetail.name} />
            </div>
                <br />
                <Link  to= "/home">
                    <button  onClick = {handleReset} className={style.btn}>Back</button>
                </Link>
        </div>

    )
}


export default VideogameDetail;