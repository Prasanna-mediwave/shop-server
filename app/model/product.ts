import moment from "moment";
import mongoose, { Schema } from "mongoose";
import { v4 as uuid } from "uuid";

const productSchema: Schema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },
  productName: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
});

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;
