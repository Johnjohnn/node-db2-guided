// Update with your config settings.
//filename: './data/produce.db3'  // location of our database
//useNullAsDefault: true, //  a flag required by SQlite 
require("dotenv").config();
module.exports = {

  development: {
   
    client: 'pg', // Tells the DBMS that you are using 
     connection: {
      host:"localhost",
      port:5432,
      user:"postgres",
      database:"project",
      password: process.env.DB_PASSWORD,
      useNullAsDefault: true,
    
    },
    migrations: {
      directory: "./migrations",
    },
     seeds: {
       directory: "./seeds",
     }
  },


};
                                                              // STEP 1  THIS IS YOUR DATABASE CONFIGURATION 