import Income from "../models/Income.js";
import Expense from "../models/Expense.js";

export const getDashboardData = async (req, res) => {
    try {
        const totalIncome = await Income.aggregate([
            { $match: { userId: req.user._id } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        const totalExpense = await Expense.aggregate([
            { $match: { userId: req.user._id } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        res.json({
            totalIncome: totalIncome[0]?.total || 0,
            totalExpense: totalExpense[0]?.total || 0,
            balance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};