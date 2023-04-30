const { DB_API_KEY } = process.env;
const axios = require("axios");
const { Videogame } = require("../db");
const { Op } = require('sequelize');

const getVideogamesName = async (req, res) => {
  const { name } = req.query;
  try {
    const videogamesBD = await Videogame.findAll({
        where: {
        name: {
        [Op.like]: `%${name}%`
        }
      }
    });

    const response = await axios(`https://api.rawg.io/api/games?key=6012f599e22a4d5eb73f8f2311367051&search=${name}`);
    const gameName = response.data.results.map((gameNam) => {
      let genres = gameNam.genres.map((genre) => genre.name).join(", ");
      let platforms = gameNam.platforms.map((platform) => platform.platform.name).join(", ");
      return {
        id: gameNam.id,
        name: gameNam.name,
        platforms,
        description: gameNam.description,
        releaseDate: gameNam.released,
        rating: gameNam.rating,
        genres,
        image: gameNam.background_image,
      };
    });

if(gameName.length === 0 && videogamesBD.length === 0){
  return res.status(404).json({message: "Videogame not found"})
}
    const videogames = [...gameName, ...videogamesBD];

    res.status(200).json(videogames);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getVideogamesName };








