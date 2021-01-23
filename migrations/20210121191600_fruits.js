
exports.up = async function(knex) {
    // translates to "CREATE TABLE fruits (...):"
  await knex.schema.createTable("fruits", (table) =>{
    // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY 
    table.integer("id").notNull().unique().primary()
    //shortcut would be table.increment("id")
    table.text("name").notNull().unique();
    table.float("avWeightOz").notNull(true)
    table.boolean("delicious").defaultTo(true)
    table.text("color")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};
                                                              // THIS IS STEP NUMBER 5  fill it out  this will create the table on the database with these commands np