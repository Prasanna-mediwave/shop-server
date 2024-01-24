import express from "express";
import { cartList, userCart } from "../controllers/addToCart";
import { verifyToken } from "../middelware/authToken";

const router = express.Router();

router.post("/user/cart", cartList);

router.get("/cart", verifyToken, userCart);

export default router;
