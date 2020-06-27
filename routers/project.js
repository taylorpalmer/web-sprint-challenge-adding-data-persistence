//post project, get projects,
const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    res.json(await db("projects"));
  } catch (err) {
    next(err);
  }
});

router.post("/projects", async (req, res, next) => {
  try {
    const [id] = await db("projects").insert(req.body);
    const project = await db("projects").where({ id }).first();

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id/resources", async (req, res, next) => {
  try {
    const resources = await findResources(req.params.id);
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

function findResources(id) {
  return db("project_resources as pr")
    .innerJoin("projects as p", "p.id", "pr.project_id")
    .innerJoin("resources as r", "r.id", "pr.resource_id")
    .where("p.id", id)
    .select("r.id", "r.name");
}

module.exports = router;
