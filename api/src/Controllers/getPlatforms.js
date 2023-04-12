// const { Platform } = require("../db");
// const axios = require("axios");

// const getPlatforms = async (req, res) => {


//   try {
//     const platformApi = await axios.get(`https://api.rawg.io/api/platforms?key=6012f599e22a4d5eb73f8f2311367051`);
//     platformApi.data.results.forEach(async (platform) => {
//       await Platform.findOrCreate({
//         where: {
//               name: platform.name,
//               id: platform.id
//           }
//       })
//     });
//     const platformDb = await Platform.findAll();
//   res.status(200).send(platformDb);
// } catch (error) {
//   res.status(404).send("Error del servidor");
// }
// }

// module.exports = { getPlatforms };