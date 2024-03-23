exports.up = function (knex) {
  return knex.schema.createTable("recipes", function (table) {
    table.increments("id").primary();
    table.string("recipe_name").notNullable().unique(); // Ensure recipe names are unique
    table.text("description");
    table.string("author");
    table.string("cuisine");
    table.string("course");
    table.integer("servings");
    table.json("instructions");
    table.json("notes");
    table.json("nutrition");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("recipes");
};
