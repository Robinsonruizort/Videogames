import React from "react";
import style from "./paginated.module.css"


const Paginated = ({allVideogames, videogamesPerPage, paginated}) => {
    const pageNumbers = []

    for (let index = 0; index <= Math.ceil(allVideogames/videogamesPerPage); index++) {
        pageNumbers.push(index + 1)
    }
    return(
        <nav >
            <ul >
            <div className={style.paginated}>
                { pageNumbers && pageNumbers.map((number) => (
                <li className={style.pag} key={number}>
                    <a onClick={() => paginated(number)}>{number}</a>
                </li>
            ))}
            </div>
            </ul>
        </nav>
    )
}

export default Paginated;