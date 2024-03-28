exports.up = function (knex) {
  return knex.schema.createTable("ingredients", function (table) {
    table.increments("id").primary();
   table.integer("recipe_id").unsigned().notNullable(); // Use recipe_id as a foreign key
   table
     .foreign("recipe_id")
     .references("id")
     .inTable("recipes")
     .onDelete("CASCADE");
    table.string("ingredient").notNullable();
    table.string("quantity");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingredients");
};
