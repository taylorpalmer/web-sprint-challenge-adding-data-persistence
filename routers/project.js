//post project, get projects,
const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    res.json(await db("project"));
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

module.exports = router;
