import dotenv from "dotenv";
dotenv.config();
import { createConnection } from "typeorm";
import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();

createConnection();

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
  console.log("Server ok");
});
