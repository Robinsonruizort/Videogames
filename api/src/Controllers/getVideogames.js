const { DB_API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getVideoGames = async (req, res) => {
  try {
    const videogameBD = await Videogame.findAll({
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    const videogames = videogameBD.map((videogame) => ({
      id: videogame.id,
      name: videogame.name,
      platforms: videogame.platforms.map((platform) => platform).join(", "),
      description: videogame.description,
      releaseDate: videogame.releaseDate,
      rating: videogame.rating,
      createdInDb: videogame.createdInDb,
      genres: videogame.genres.map((genre) => genre.name).join(", "),
      image: videogame.image,
    }));

    for (let index = 1; index <= 5; index++) {
      const response = await axios.get(`https://api.rawg.io/api/games?key=6012f599e22a4d5eb73f8f2311367051&page=${index}`);
      const games = response.data.results.map((game) => ({
        id: game.id,
        name: game.name,
        platforms: game.platforms.map((platform) => platform.platform.name).join(", "),
        description: game.description,
        releaseDate: game.released,
        rating: game.rating,
        genres: game.genres.map((genre) => genre.name).join(", "),
        image: game.background_image,
      }));
      videogames.push(...games);
    }

    res.status(200).json(videogames);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getVideoGames };
