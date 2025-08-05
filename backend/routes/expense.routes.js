import express from "express";
import { addExpense, getAllExpense, downloadExpenseExcel, deleteExpense } from "../controllers/expense.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/add", protect, addExpense);
router.get("/", protect, getAllExpense);
router.get("/download", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);
export default router;