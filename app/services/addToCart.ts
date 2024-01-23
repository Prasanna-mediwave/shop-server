import AddToCartModel from "../model/addToCart";
import SignupModel from "../model/signup";

export const creatCartList = async (body: any) => {
  const cartList = await AddToCartModel.create(body);
  return cartList;
};

export const getCartByUser = async (id: string) => {
  const user = await SignupModel.aggregate([
    {
      $match: {
        _id: id,
      },
    },
    {
      $lookup: {
        from: "addtocarts",
        localField: "_id",
        foreignField: "userId",
        as: "cartData",
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "cartData.productId",
        foreignField: "_id",
        as: "productDetials",
        pipeline: [
          {
            $project: {
              __v: 0,
            },
          },
        ],
      },
    },
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        mobileNumber: 1,
        productDetials: 1,
        numberOfProduct: { $size: "$productDetials.productName" },
        totalPrice: { $sum: "$productDetials.price" },
      },
    },
  ]);
  return user;
};
