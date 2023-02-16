/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("activity", (table) => {
    table.increments("id").primary();
    table.string("type").notNullable();
    table.integer("date").notNullable();
    table.string("timeofday").notNullable();
    table.string("rating").notNullable();
    table.string("distance");
    table.string("exercise1");
    table.string("exercise2");
    table.string("exercise3");
    table.string("exercise4");
    table.string("exercise5");
    table.timestamps(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("activity");
};
