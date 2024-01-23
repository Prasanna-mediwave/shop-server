import express from "express";
import bodyParser from "body-parser";
import dB from "./config/dataBase";
import userRouter from "./routes/signup";
import productRouter from "./routes/product";
import cartRouter from "./routes/addToCart";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use("/", userRouter);
app.use("/product", productRouter);
app.use("/", cartRouter);

dB.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});

dB.on("error", (err) => {
  console.log("Server is not running", err);
});
