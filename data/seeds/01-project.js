exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "build table",
      description: "We're tired of eating on the floor",
      completed: false,
    },
    { name: "pick nose", completed: true },
  ]);
};
