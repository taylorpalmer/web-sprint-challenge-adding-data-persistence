exports.seed = async function (knex) {
  await knex("projects").insert([
    { name: "build table", completed: false },
    { name: "pick nose", completed: true },
  ]);
};
