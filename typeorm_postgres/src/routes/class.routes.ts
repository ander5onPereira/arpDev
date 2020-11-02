import { Router } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import Class from "../models/Class";
import ClassRepository from "../repositories/classRepository";
const classRouter = Router();

classRouter.post("/", async (req, res) => {
  try {
    const repo = getRepository(Class);
    const resp = await repo.save(req.body);
    return res.status(201).json(resp);
  } catch (error) {
    console.log("Error.class.routes: ", error.massage);
    return res.status(404).json({ massage: "Error.class.routes" });
  }
});
classRouter.get("/", async (req, res) => {
  return res.json(await getRepository(Class).find());
});
classRouter.get("/:name", async (req, res) => {
  const repository = getCustomRepository(ClassRepository);
  const data = await repository.findByName(req.params.name);
  return res.json(data);
});
export default classRouter;
