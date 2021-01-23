// const knex = require("knex")
// const knexfile = require("../knexfile")

// module.exports =  knex(knexfile)                        // you will have this while running sqlite 




const environment = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[environment];                       // you will have this while running this enviorment with postgresql
module.exports = require('knex')(config);








                                                        // THIS IS STEP 2 