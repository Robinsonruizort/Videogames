//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { conn, Genre } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  axios.get('https://api.rawg.io/api/genres?key=6012f599e22a4d5eb73f8f2311367051')
    .then(response => {
      const genreApi = response.data;
      genreApi.results.forEach(async (genre) => {
        await Genre.findOrCreate({
          where: {
            name: genre.name,
            id: genre.id
          }
        })
      });
    })
    .then(() => {
      server.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
      });
    });
});


// aca vamos a replicar lo anterior, primero entendamos el flujo, tengo el conn.sync para conect el force sync true carga la base de datos cada vez que se levanta el servidor
//y luego utilizamos promesas

// conn.sync({force: true}).then(() => {
//   axios.get(`https://api.rawg.io/api/genres?key=6012f599e22a4d5eb73f8f2311367051`)
//   .then (response => {
//     const apiResponse = response.data;

//     apiResponse.results.forEach(async (genre)=> {
//       await Genre.findOrCreate({
//         where : {
//           name: genre.name,
//           id:genre.id
//         }
//       })
//     })
//   })
// })