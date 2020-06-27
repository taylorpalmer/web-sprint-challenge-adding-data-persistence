exports.seed = async function (knex) {
  await knex("resources").insert([
    { name: "wood", description: "sturdy" },
    { name: "hammer" },
    { name: "nails", description: "straight, sharp" },
    { name: "nose", description: "stuffed" },
    { name: "finger", description: "nimble" },
  ]);
};
