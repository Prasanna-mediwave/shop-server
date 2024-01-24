import { userToken } from "../middelware/authToken";
import { creatCartList, getCartByUser } from "../services/addToCart";

export const cartList = async (req: any, res: any) => {
  const list = await creatCartList(req.body);
  res.send(list);
};

export const userCart = async (req: any, res: any) => {
  const user = userToken(req.headers);
  const cart = await getCartByUser(user);
  res.send(cart);
};
