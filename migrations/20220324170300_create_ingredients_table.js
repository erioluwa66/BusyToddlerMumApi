exports.up = function (knex) {
  return knex.schema.createTable("ingredients", function (table) {
    table.increments("id").primary();
    table.string("recipe_name").notNullable(); // Reference to recipe name
    table
      .foreign("recipe_name")
      .references("recipes.recipe_name")
      .onDelete("CASCADE"); // Reference recipe_name in recipes table
    table.string("ingredient").notNullable();
    table.string("quantity");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ingredients");
};
