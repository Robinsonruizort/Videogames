const { Genre } = require("../db");
const axios = require("axios");

const getGenres = async (req, res) => {
  try {
    const genreDb = await Genre.findAll();
    res.status(200).send(genreDb);
  } catch (error) {
    res.status(404).send("Server Error");
  }
}

module.exports = { getGenres };


//Using fetch, we need to import Fetch

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
