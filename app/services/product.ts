import ProductModel from "../model/product";

export const createProduct = async (body: any) => {
  const create = await ProductModel.create(body);
  return create;
};

export const getAllProduct = async () => {
  const getAll = await ProductModel.find({});
  return getAll;
};

export const getProductId = async (id: string) => {
  const getById = await ProductModel.findById({ _id: id });
  return getById;
};

export const delProduct = async (id: string) => {
  const del = await ProductModel.findByIdAndDelete({ _id: id });
  return del;
};

export const updateProduct = async (id: string, body: any) => {
  const updateId = await ProductModel.findById(id);
  if (!updateId) {
    console.log("Product don't found in the list");
  }
  const update = await ProductModel.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });
  return update;
};

export const pagination = async (page: number) => {
  const pageNum = await ProductModel.aggregate([
    { $skip: page * 5 },
    { $limit: 5 },
  ]);
  return pageNum;
};
