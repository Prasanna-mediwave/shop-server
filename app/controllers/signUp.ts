import { createUser } from "../services/signup";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const userData = async (req: any, res: any) => {
  const { password } = req.body;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  req.body.password = hashPassword;
  const data = await createUser(req.body);
  res.send(data);
};
