/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("test").del();
  await knex("test").insert([
    {
      id: 1,
      firstname: "Marco",
      lastname: "Rizzo",
      email: "marco@gmail.com",
      phone: "778-123-4567",
    },
    {
      id: 2,
      firstname: "Lebron",
      lastname: "James",
      email: "lbj@gmail.com",
      phone: "303-123-4567",
    },
    {
      id: 3,
      firstname: "Steve",
      lastname: "Jobs",
      email: "apple@gmail.com",
      phone: "669-123-4567",
    },
  ]);
};
