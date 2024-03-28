exports.up = function (knex) {
  return knex.schema.createTable("recipe_ingredients", function (table) {
    table.increments("id").primary();
    table.integer("recipe_id").unsigned().notNullable();
    table.integer("ingredient_id").unsigned().notNullable();
    table
      .foreign("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE");
    table
      .foreign("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE");
    // You can add additional fields like quantity here
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("recipe_ingredients");
};
