import mongoose, { Schema } from "mongoose";
import { v4 as uuid } from "uuid";
import moment from "moment";

const cartSchema: Schema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },
  userId: {
    type: String,
  },
  productId: {
    type: String,
  },
  orderPlaced: {
    type: Boolean,
    default: false,
  },
  addAt: {
    type: Date,
    default: moment(),
  },
});

const AddToCartModel = mongoose.model("addtocart", cartSchema);

export default AddToCartModel;
