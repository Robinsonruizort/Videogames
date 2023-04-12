import React from "react";
import style from "./about.module.css"


const About = () =>{
    return (
        <div className={style.about}>
            <h1>About this project</h1>
            <h3>This is my individual project for the Henry Bootcamp: This project was created using JavaScript, HTML, CSS, React, Redux.
The project makes requests to an external API and also stores information in a database, from there it takes the necessary information to render Video games information, has functionalities to sort the video games according to different parameters, and also makes dynamic searches </h3>
        </div>
    )
}

export default About;