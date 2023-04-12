import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideogames, filterByGenre, filterByCreated, getGenres, orderBy, orderRating} from "../../Redux/actions";
import CardVideogame from "../CardVideogame/card";
import Paginated from "../Paginated/paginated";
import SearchBar from "../SearchBar/searchBar";
import style from "./home.module.css";

const Home = () => {

    const dispatch = useDispatch()
    const allVideogames = useSelector ((state) => state.videogames)
    const allGenres = useSelector((state) => state.genres)
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)
    const [order, setOrder] = useState(" ");
    const [rating, setRating] = useState(" ")

    const lastVideogame = currentPage * videogamesPerPage
    const firstVideogame = lastVideogame - videogamesPerPage
    const currentVideogames = allVideogames.slice(firstVideogame, lastVideogame)

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect (() => {
        dispatch(getVideogames());
    },[])


    useEffect(() => {
        dispatch(getGenres())
    }, [])

const getAllVideogames = (e) =>{
    dispatch(getVideogames());
}

const handleFilterGenre = (e) => {
    dispatch(filterByGenre(e.target.value))
}


const handleCreatedBy = (e) => {
    dispatch(filterByCreated(e.target.value))
}

const handleSort = (e) => {
    dispatch(orderBy(e.target.value))
    setCurrentPage(1);
    setOrder(`order ${e.target.value}`)
};

const handleRating = (e) => {
    dispatch(orderRating(e.target.value))
    setCurrentPage(1);
    setRating(e.target.value)
};
    return (
        <div>
            <div className={style.main}>
            <button className={style.btn} onClick={getAllVideogames}>Get all videogames</button>
            <SearchBar/>
            </div>
            <br />
            <div>
                <div className={style.searchFilter}>
                    <div className={style.rating}>
                        <label className={style.filterLabel} htmlFor="ratingFilter">Order by rating:</label>
                        <select className={style.opt} id="ratingFilter" onChange={handleRating}>
                        <option value="Highest">Highest</option>
                        <option value="Lowest">Lowest</option>
                        </select>
                    </div>
                <br />
                <div className={style.rating}>
                <label className={style.filterLabel} htmlFor="ratingFilter">Order by name:</label>
                <select className={style.opt} id="ratingFilter" onChange={handleSort}>
                <option value="Ascendant">Ascendant</option>
                <option value="Descendent">Descendent</option>
                </select>
                </div>
                <br />
                <div className={style.rating}>
                <label className={style.filterLabel} htmlFor="ratingFilter">Filter by genres: </label>
                <select className={style.opt} id="ratingFilter" onChange={handleFilterGenre}>
                <option value="All">All genres</option>
                {allGenres.map((genre) => (
                <option key={genre.id} value={genre.name}>{genre.name}</option>
                 ))}
                </select>
                </div>
                <br />
                <div className={style.rating}>
                <label className={style.filterLabel} htmlFor="ratingFilter">Filter by source: </label>
                <select className={style.opt} id="ratingFilter" onChange={handleCreatedBy}>
                    <option value="All">All</option>
                    <option value="From database">From database</option>
                    <option value="From Api">From API</option>
                </select>
                </div>
                </div>
                <br />
                <div className={style.Card}>
                    {currentVideogames.map((videogame) => (
                    <div key={videogame.id}>
                    <CardVideogame
                        id={videogame.id}
                        name={videogame.name}
                        image={videogame.image}
                        genres={videogame.genres}
                    />
                </div>))}
                </div>
                <Paginated
                    videogamesPerPage = {videogamesPerPage}
                    allVideogames = {allVideogames.length > 0 ? allVideogames.length : null}
                    paginated = {paginated}
                />
            </div>
        </div>
    )
}



export default Home;