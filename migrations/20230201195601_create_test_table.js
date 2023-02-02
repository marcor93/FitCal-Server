/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("test", (table) => {
    table.uuid("id").primary();
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("phone").notNullable();
    table.string("email").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("test");
};
