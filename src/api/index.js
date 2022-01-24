import app from "next/app";
import axios from "axios";
import { LAMBDA_VERIFY_BASE_PATH } from "../services/index/config/config";
import { LAMBDA_VERIFY_API_KEY } from "../services/index/utils/predata";

const cookieParser = require("cookie-parser");
const Router = require("express").Router;
const express = require("express");

const router = Router();
router.use(cookieParser());
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

export default router;
