import SignupModules from "../model/signup";
import bcrypt from "bcrypt";
import jwtToken from "jsonwebtoken";

export const createUser = async (body: any) => {
  const user = await SignupModules.create(body);
  return user;
};
export const loginData = async (req: any, res: any) => {
  const { email, password } = req.body;
  const user: any = await SignupModules.findOne({ email: email });
  if (!user) {
    res.status(401).json({ error: "Invalid email or password" });
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const payload = {
        emailId: email,
        password: password,
      };
      const secretKey = "secretKey";
      const login = jwtToken.sign(payload, secretKey, { expiresIn: "24h" });
      res.status(200).json({ loginToken: login });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  }
};
