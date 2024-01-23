import express from "express";
import { userData } from "../controllers/signUp";
import { loginData } from "../services/signup";

const router = express.Router();

router.route("/signup/create").post(userData);

router.route("/login").post(loginData);

export default router;
