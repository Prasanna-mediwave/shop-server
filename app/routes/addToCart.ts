import express from "express";
import { cartList, userCart } from "../controllers/addToCart";

const router = express.Router();

router.route("/user/cart").post(cartList);

router.route("/cart/:id").get(userCart);

export default router;
