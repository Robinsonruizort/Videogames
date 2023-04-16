const { Genre } = require("../db");
const axios = require("axios");

const getGenres = async (req, res) => {


  try {
    // const genreApi = await axios.get(`https://api.rawg.io/api/genres?key=6012f599e22a4d5eb73f8f2311367051`);
    // genreApi.data.results.forEach(async (genre) => {
    //   await Genre.findOrCreate({
    //     where: {
    //           name: genre.name,
    //           id: genre.id
    //       }
    //   })
    // });
    const genreDb = await Genre.findAll();
  res.status(200).send(genreDb);
} catch (error) {
  res.status(404).send("Error del servidor");
}
}

module.exports = { getGenres };



//Using fetch, tengo que importar Fetch

// const { Genre } = require("../db");
// const fetch = require("node-fetch");

// const getGenres = (req, res) => {
//   Genre.findAll()
//     .then(genreDb => {
//       res.status(200).send(genreDb);
//     })
//     .catch(error => {
//       res.status(404).send("Error del servidor");
//     });
// };

// module.exports = { getGenres };
