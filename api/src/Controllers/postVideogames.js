const { Videogame, Genre } = require("../db");
const { Op } = require('sequelize');

const postVideogames = async (req, res) => {
    const { name, description, platforms, releaseDate, createdInDb, rating, genres, image } = req.body;
    try {
        const newVideogame = await Videogame.create({
            name,
            description,
            releaseDate,
            createdInDb,
            rating,
            image,
            platforms,
        });
        const genreNames = await Genre.findAll({
            where: {
              id: {
                [Op.in]: genres
              }
            },
          })
          await newVideogame.addGenre(genreNames);
        res.status(200).json({
            message: "Videogame created successfully",
        });
    } catch (error) {
        res.status(404).send({ message: error.message });
      }
    };
module.exports = { postVideogames };
