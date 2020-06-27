exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name").notNull().unique();
    table.text("description");
    table.boolean("completed").defaultTo(false).notNull();
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name").notNull().unique();
    table.text("description");
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.text("description").notNull().unique();
    table.text("notes");
    table.boolean("completed").defaultTo(false).notNull();
  });

  await knex.schema.createTable("project_resources", (table) => {
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table
      .integer("resource_id")
      .references("id")
      .inTable("resources")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
