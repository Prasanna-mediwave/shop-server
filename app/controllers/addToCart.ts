import { creatCartList, getCartByUser } from "../services/addToCart";

export const cartList = async (req: any, res: any) => {
  const list = await creatCartList(req.body);
  res.send(list);
};

export const userCart = async (req: any, res: any) => {
  const cart = await getCartByUser(req.params.id);
  res.send(cart);
};
