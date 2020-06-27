exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      project_id: 1,
      description: "join legs to flat part with nails and hammer",
      completed: false,
    },
    {
      project_id: 2,
      description: "stick finger in nose and look for goodies",
      notes: "duh",
      completed: true,
    },
  ]);
};
