import {
  createProduct,
  getAllProduct,
  getProductId,
  delProduct,
  updateProduct,
  pagination,
} from "../services/product";
import jwt from "jsonwebtoken";

const secretKey = "secretKey";
const verifyToken = (token: string, secret: string): any => {
  try {
    const decode = jwt.verify(token, secret);
    return decode;
  } catch (error) {
    return null;
  }
};

export const productData = async (req: any, res: any) => {
  const data = await createProduct(req.body);
  res.send(data);
};
export const allProduct = async (req: any, res: any) => {
  const accessToken = req.headers["access-token"];
  const decode = await verifyToken(accessToken, secretKey);
  if (decode) {
    const allData = await getAllProduct();
    res.send(allData);
  } else res.status(401).send("user not found");
};

export const productId = async (req: any, res: any) => {
  const dataById = await getProductId(req.params.id);
  res.send(dataById);
};

export const productDel = async (req: any, res: any) => {
  const del = await delProduct(req.params.id);
  res.send(del);
};

export const productUpdate = async (req: any, res: any) => {
  const update = await updateProduct(req.params.id, req.body);
  res.send(update);
};

export const pageNumber = async (req: any, res: any) => {
  const page = await pagination(req.params.page);
  res.send(page);
};
