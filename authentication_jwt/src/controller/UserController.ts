import dotenv from "dotenv";
dotenv.config();
import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Login } from "../entity/Login";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const inpt = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const user = await getRepository(Login).find({
    where: {
      email,
    },
  });
  if (user.length === 1) {
    if (await bcrypt.compare(senha, user[0].senha)) {
      const token = jwt.sign({ id: user[0].id }, process.env.APP_SECRET, {
        expiresIn: "1d",
      });
      const data = {
        id: user[0].id,
        nome: user[0].nome,
        email: user[0].email,
        token,
      };
      return res.json(data);
    } else {
      return res.status(404).json({ massage: "User not found" });
    }
  } else {
    return res.status(404).json({ massage: "User not found" });
  }
};

export const listUser = async (req: Request, res: Response) => {
  const login = await getRepository(Login).find();

  return res.json(login);
};

export const saveLogin = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, 8);

  const login = await getRepository(Login).save({
    nome,
    email,
    senha: senhaHash,
  });

  return res.json(login);
};
