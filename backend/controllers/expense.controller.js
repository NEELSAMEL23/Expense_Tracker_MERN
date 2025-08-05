import Expense from "../models/Expense.js";
import ExcelJS from "exceljs";

export const addExpense = async (req, res) => {
  try {
    const { icon, category, amount, date } = req.body;
    const expense = await Expense.create({ userId: req.user._id, icon, category, amount, date });
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllExpense = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user._id });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const downloadExpenseExcel = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user._id });
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Expenses");
    sheet.addRow(["Category", "Amount", "Date"]);
    expenses.forEach(e => sheet.addRow([e.category, e.amount, e.date]));

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=expenses.xlsx');
    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    if (expense.userId.toString() !== req.user._id.toString()) return res.status(403).json({ message: "Unauthorized" });
    await expense.deleteOne();
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};