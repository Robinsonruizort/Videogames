import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getGenres } from "../../Redux/actions";
import validate from "./validation";
import style from "./CreateVideogame.module.css";
import axios from "axios";


// const postVideogame = () =>{
// //     return async function (){
// //         const response = await axios.post(`http://localhost:3001/videogames/`, payload)
// //     }
// //  }



const CreateVideogame = () => {
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
    const [errors, setErrors] = useState ({})

    const allPlatforms = ["PlayStation 5", "Xbox Series S/X", "PlayStation 4", "PC", "PlayStation 3", "Xbox 360", "Xbox One", "Nintendo Switch", "macOS", "Android", "Linux" ]
    const [input, setInput] = useState({
            name: "",
            description:"",
            platforms: [],
            image:"",
            releaseDate: "",
            rating: 0.0,
            genres:[]
    })

    const handleChange =(e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))

    }

    const handleSelectGenres = (e) => {
        const selectedGenre = e.target.value;
        if (!input.genres.includes(selectedGenre)) {
            setInput({
                ...input,
                genres: [...input.genres, selectedGenre]
            })
        }
    }  
    const handleSelectPlatform = (e) => {
        const selectedPlatform = e.target.value;
        if(!input.platforms.includes(selectedPlatform)){
          setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
    }
  }
  const handleDeleteGenre = (genre) => {
    const updatedGenres = input.genres.filter((g) => g !== genre);
    setInput({
      ...input,
      genres: updatedGenres,
    });
  };
  
  const handleDeletePlatform = (platforms) => {
    const updatedPlatforms = input.platforms.filter((p) => p !== platforms);
    setInput({
      ...input,
      platforms: updatedPlatforms,
    });
  };

    useEffect(() => {
    dispatch(getGenres()) ;
    }, [])
    
    
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
        const response =  axios.post(`http://localhost:3001/videogames/`, input)
        alert("Videogame created")

      } catch (error) { 
        window.alert(error.message);
      }
    }

      const hasErrors = Object.keys(errors).length > 0;

      let hasInputs =false;
      const inputs = document.querySelectorAll('input[type="text"]');
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() !== '') {
          hasInputs = true;
          break;
        }
      }

      const handleClick = () => {
        if (hasErrors) {
          alert('There are errors in the form. Please check your inputs.');
        }
        // handleSubmit();
      }
      return (
        <div>
            <h1 className={style.create}>Create your videogame</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.content}>
                    <label htmlFor="">Name: </label>
                    <input className={style.input}type="text" value={input.name} name= "name" placeholder="Add the videgomae name" id="name" onChange={handleChange} />
                    {errors.name && <p style ={{ color: "black", fontStyle: "italic"}}>{errors.name}</p>}
                    <br />
                    <label htmlFor="">Description: </label>
                    <input className={style.input}type="text" value= {input.description} name= "description" placeholder="Add a description" onChange={handleChange}/>
                    {errors.description && <p style ={{color: "black", fontStyle: "italic"}}>{errors.description}</p>}
                    <br />
                    <label htmlFor="">ReleaseDate: </label>
                    <input className={style.input}type="text" value= {input.releaseDate} name="releaseDate" placeholder="YYYY-MM-DD"  onChange={handleChange}/>
                    {errors.releaseDate && <p style ={{color: "black", fontStyle: "italic"}}>{errors.releaseDate}</p>}
                    <br />
                    <label htmlFor="">Rating: </label>
                    <input className={style.input} type="text" value={input.rating} name="rating" placeholder="Add a rating (example: 5.00)" min="0.0" max="5.0" onChange={handleChange}/>
                    {errors.rating && <p style ={{color: "black", fontStyle: "italic"}}>{errors.rating}</p>}
                    <br />
                    <label htmlFor="">Platforms: </label>
                    <select className={style.select} name="platforms" id="platforms" value={input.platforms} onChange={handleSelectPlatform} multiple >
                        {
                            allPlatforms.map((platforms, index) =>{
                                return (
                                <option key={index}value={platforms}>{platforms}</option>
                            )})
                        }
                    </select>
                    {errors.platforms && <p style ={{color: "black", fontStyle: "italic"}}>{errors.platforms}</p>}
                    <ul>
                    {input.platforms.map((platforms) => (
                    <li key={platforms}>
                    {platforms}
                    <button onClick={() => handleDeletePlatform(platforms)}>x</button>
                    </li>
                    ))}
                    </ul>
                    <br />
                    <label htmlFor="">Genres: </label>
                    <select className={style.select} name="genres" id="genres" value={input.genres} onChange={handleSelectGenres} multiple >
                        {
                            genres.map ((genre,index) => {
                              return (
                                <option key={index}value={genre.id}>{genre.name}</option>
                            )})
                        }
                    </select>
                    {errors.genres && <p style ={{color: "black", fontStyle: "italic"}}>{errors.genres}</p>}
                    <ul >
                    {input.genres.map((genre) => (
                      <li key={genre}>
                    {genre}
                    <button onClick={() => handleDeleteGenre(genre)}>x</button>
                    </li>
                    ))}
                    </ul>
                    <br />
                    <label htmlFor="">Image: </label>
                    <input className={style.input}type="text" value={input.image} name="image" placeholder="Add picture URL" onChange={handleChange}/>
                    {errors.image && <p style ={{color: "black", fontStyle: "italic"}}>{errors.image}</p>}
                    <br />
                    <button disabled={hasErrors || !hasInputs} className={style.button} type="Submit" onSubmit={() => handleClick()} >Create your videogame</button>
                </div>
            </form>
        </div>
    )
  }
  
  
  export default CreateVideogame;
  
  