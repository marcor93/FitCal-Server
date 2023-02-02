const knex = require("knex")(require("../knexfile"));

// sample get request
const getTestItem = async (req, res) => {
  knex
    .from("test")
    .select("test.*")
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => res.status(404).send(`test item not retrieved, ${err}`));
};

//ensure you add any new routes to the exporter below
module.exports = { getTestItem };
