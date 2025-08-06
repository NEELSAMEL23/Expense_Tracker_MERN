import { createContext, useContext, useState, useEffect } from "react";
import { addExpenseService, getExpenseService, deleteExpenseService, downloadExpenseService } from "../Services/expenseService";

const ExpenseContext = createContext(null);

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchExpenses = async () => {
        setLoading(true);
        try {
            const data = await getExpenseService();
            setExpenses(data || []);
        } catch (error) {
            console.error("Failed to fetch expenses:", error);
        } finally {
            setLoading(false);
        }
    };

    const addExpense = async (payload) => {
        try {
            const newExpense = await addExpenseService(payload);
            setExpenses((prev) => [...prev, newExpense]);
            return newExpense;
        } catch (error) {
            throw error;
        }
    };

    const deleteExpense = async (id) => {
        try {
            await deleteExpenseService(id);
            setExpenses((prev) => prev.filter((expense) => expense._id !== id));
        } catch (error) {
            throw error;
        }
    };

    const downloadExpense = async () => {
        try {
            const response = await downloadExpenseService();
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "expenses.xlsx");
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Failed to download expense file:", error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <ExpenseContext.Provider value={{ expenses, loading, fetchExpenses, addExpense, deleteExpense, downloadExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpense = () => useContext(ExpenseContext);
