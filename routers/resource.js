//post resource, get resources,
const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  try {
    res.json(await db("resource"));
  } catch (err) {
    next(err);
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    const [id] = await db("resources").insert(req.body);
    const resource = await db("resources").where({ id }).first();

    res.status(201).json(resource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
