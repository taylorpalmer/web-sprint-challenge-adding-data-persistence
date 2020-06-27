exports.up = function (knex) {};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
