import express from "express";
import {
  productData,
  allProduct,
  productId,
  productDel,
  productUpdate,
  pageNumber,
} from "../controllers/product";

const router = express.Router();

router.route("/create").post(productData);

router.route("/all").get(allProduct);

router.route("/:id").get(productId);

router.route("/:id").delete(productDel);

router.route("/update/:id").put(productUpdate);

router.route("/page/:page").get(pageNumber);

export default router;
