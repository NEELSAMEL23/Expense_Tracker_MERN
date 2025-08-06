import Income from "../models/Income.js";
import Expense from "../models/Expense.js";

export const getDashboardData = async (req, res) => {
    try {
        const userId = req.user._id;

        const totalIncome = await Income.aggregate([
            { $match: { userId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const totalExpense = await Expense.aggregate([
            { $match: { userId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const recentIncome = await Income.find({ userId })
            .sort({ date: -1 })
            .limit(3)
            .select("icon source amount date");

        const recentExpense = await Expense.find({ userId })
            .sort({ date: -1 })
            .limit(3)
            .select("icon category amount date");

        const recentTransactions = [...recentIncome, ...recentExpense]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);

        res.json({
            totalIncome: totalIncome[0]?.total || 0,
            totalExpense: totalExpense[0]?.total || 0,
            balance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
            recentTransactions
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
