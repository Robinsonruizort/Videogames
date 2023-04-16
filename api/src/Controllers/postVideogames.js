const { Videogame, Genre } = require("../db");
const { Op } = require('sequelize');

const postVideogames = async (req, res) => {
    const { name, description, platforms, releaseDate, createdInDb, rating, genres, image } = req.body;

    // console.log(genres);

    // if(typeof rating !== "undefined" && (typeof rating !== "number" || rating < 1 || rating > 5)) {
    //     return res.status(400).send("Invalid rating")
    // }

    try {
      console.log(req.body);
        const newVideogame = await Videogame.create({
            name,
            description,
            releaseDate,
            createdInDb,
            rating,
            image,
            platforms,
        });

        console.log("Hasta aqui llegamos");
        const genreNames = await Genre.findAll({
            where: {
              id: {
                [Op.in]: genres
              }
            },
            // attributes: ['name'],
          })
        //   .then(genres => genres.map(genre => genre.name).join(', '));
      
          // const platformNames = await Platform.findAll({
          //   where: {
          //     id: {
          //       [Op.in]: platform
          //     }
          //   },
          //   // attributes: ['name'],
          // })
        //   .then(platforms => platforms.map(platform => platform.name).join(', '));

        
        await newVideogame.addGenre(genreNames);
        // await newVideogame.addPlatform(platformNames);

        res.status(200).json({
            message: "Videogame created successfully",
        });
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
};



module.exports = { postVideogames };