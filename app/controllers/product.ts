import {
  createProduct,
  getAllProduct,
  getProductId,
  delProduct,
  updateProduct,
  pagination,
  updateExistingDocuments,
} from "../services/product";

export const productData = async (req: any, res: any) => {
  const data = await createProduct(req.body);
  res.send(data);
};
export const allProduct = async (req: any, res: any) => {
  const allData = await getAllProduct();
  res.send(allData);
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

export const updateQnt = async (req: any, res: any) => {
  const page = await updateExistingDocuments();
  res.send(page);
};
