import express from "express";
import { cartList, userCart } from "../controllers/addToCart";

const router = express.Router();

router.post("/user/cart", cartList);

router.get("/cart/:id", userCart);

export default router;
