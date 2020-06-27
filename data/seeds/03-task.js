exports.seed = async function (knex) {
  await knex("tasks").insert([
    { description: "join legs and back to seat piece with nails and hammer" },
    {
      description: "stick finger in nose and look for goodies",
      completed: true,
    },
  ]);
};
