const knex = require("knex")(require("../knexfile"));

const getActivity = async (req, res) => {
  knex
    .from("activity")
    .select("activity.*")
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => res.status(404).send(`Activity not retrieved, ${err}`));
};

const addActivity = async (req, res) => {
  const newAct = { ...req.body };
  knex("activity")
    .insert(newAct)
    .then(res.status(201))
    .catch((err) => {
      res.status(400).send(`Error creating new activity: ${err}`);
    });
};

const getOneActivity = async (req, res) => {
  knex("activity")
    .select("*")
    .where("id", req.params.activityId)
    .then((activity) => {
      res.status(200).json(activity[0]);
    })
    .catch((error) =>
      res.status(400).send(`Error finding Warehouses ${error}`)
    );
};

const deleteActivity = async (req, res) => {
  knex("activity")
    .where({ id: req.params.activityId })
    .del()
    .then((rowsDeleted) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const editActivity = async (req, res) => {
  console.log(req.body);
  const editedAct = { ...req.body };

  knex("activity")
    .where({ id: req.body.id })
    .update(editedAct)
    .select("*")
    .then((activity) => {
      res.status(200).json(activity[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error editing your activity: ${err}`);
    });
};

module.exports = {
  getActivity,
  addActivity,
  getOneActivity,
  deleteActivity,
  editActivity,
};
