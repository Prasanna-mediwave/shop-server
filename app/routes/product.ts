import express from "express";
import {
  productData,
  allProduct,
  productId,
  productDel,
  productUpdate,
  pageNumber,
  updateQnt,
} from "../controllers/product";

import { verifyToken } from "../middelware/authToken";

const router = express.Router();

router.post("/create", productData);

router.get("/all", verifyToken, allProduct);

router.get("/:id", productId);

router.delete("/:id", productDel);

router.put("/update/:id", productUpdate);

router.get("/page/:page", pageNumber);

router.get("/update/many", updateQnt);

export default router;
