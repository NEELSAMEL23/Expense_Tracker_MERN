import express from "express";
import { addIncome, getAllIncome, downloadIncomeExcel, deleteIncome } from "../controllers/income.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/add", protect, addIncome);
router.get("/", protect, getAllIncome);
router.get("/download", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteIncome);
export default router;