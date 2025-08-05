import Income from "../models/Income.js";
import ExcelJS from "exceljs";

export const addIncome = async (req, res) => {
  try {
    const { icon, source, amount, date } = req.body;
    const income = await Income.create({ userId: req.user._id, icon, source, amount, date });
    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllIncome = async (req, res) => {
  try {
    const incomes = await Income.find({ userId: req.user._id });
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const downloadIncomeExcel = async (req, res) => {
  try {
    const incomes = await Income.find({ userId: req.user._id });
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Incomes");
    sheet.addRow(["Source", "Amount", "Date"]);
    incomes.forEach(i => sheet.addRow([i.source, i.amount, i.date]));

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=incomes.xlsx');
    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id);
    if (!income) return res.status(404).json({ message: "Income not found" });
    if (income.userId.toString() !== req.user._id.toString()) return res.status(403).json({ message: "Unauthorized" });
    await income.deleteOne();
    res.json({ message: "Income deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
