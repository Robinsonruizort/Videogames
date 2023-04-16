const { Router } = require('express');
const { getVideogameId} = require("../Controllers/getVideogameId");
const { getVideogamesName} = require("../Controllers/getVideogamesName");
const { getVideoGames} = require("../Controllers/getVideogames");
const { postVideogames } = require("../Controllers/postVideogames");
const { getGenres } = require('../Controllers/getGenres');
// const { getPlatforms} = require("../Controllers/getPlatforms")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routes = Router();

routes.get("/videogames/:id", getVideogameId); // it brings the videogame associated to the ID
routes.get("/videogame/name?", getVideogamesName); //It brings the data entered by query
routes.get("/videogames", getVideoGames); // it brings all the videogames
routes.get("/genres", getGenres);

routes.post("/videogames", postVideogames);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = routes;
