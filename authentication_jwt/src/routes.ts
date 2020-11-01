import express from "express";
import { saveLogin, listUser, inpt } from "./controller/UserController";
import { auth } from "./middlewares/auth";
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ massage: "ok" });
});

routes.post("/login", inpt);

routes.use(auth);
routes.post("/user", saveLogin);
routes.get("/user", listUser);

export default routes;
