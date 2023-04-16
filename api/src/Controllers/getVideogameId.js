const axios = require("axios");
const { Videogame, Genre } = require ("../db")

const getVideogameId = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    //Since the videogames created were created with an UUID we can make a filter since UUID typeof is NaN
    try {
      const videogame = await Videogame.findByPk(id, ({
        include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
          //we use the FindbyPK, to look in the database, any videogame that is associated to the id, and we include the Genre to bring teh genre that is associated thought he relational table
        },
      ],
    }));
    const videogamesBD = {
      id: videogame.id,
      name: videogame.name,
      platforms: videogame.platforms.map((platform) => platform).join(", "),
      description: videogame.description,
      releaseDate: videogame.releaseDate,
      rating: videogame.rating,
      createdInDb: videogame.createdInDb,
      genres: videogame.genres.map((genre) => genre.name).join(", "),
      image: videogame.image,
    };

      res.status(200).json(videogamesBD);
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  } else {
        try {
        axios.get(`https://api.rawg.io/api/games/${id}?key=6012f599e22a4d5eb73f8f2311367051`)
        .then((response) => {
        let genres = response.data.genres.map((genre) => genre.name).join(", ");
        let platforms = response.data.platforms.map((platform) => platform.platform.name).join(", ");
        const videogame = {
          id: response.data.id,
          name: response.data.name,
          platforms,
          description: response.data.description.replace(/<\/?p>|<br\s*\/?>/gi, '').replace(/\n/g, ''),
          releaseDate: response.data.released,
          rating: response.data.rating,
          genres,
          image: response.data.background_image,
          
        };
        res.status(200).json(videogame);
      })
      .catch((error) => res.status(404).send({ message: "There is no videogame with the entered ID" }));
  } catch (error) {
    res.status(500).send({ message: "There is no videogame with the entered ID" });
  }
  }
};

module.exports = { getVideogameId };