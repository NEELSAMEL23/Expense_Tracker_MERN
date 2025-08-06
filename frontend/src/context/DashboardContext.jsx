import { createContext, useContext, useState, useEffect } from "react";
import { getDashboardDataService } from "../Services/dashboardService";

const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
    const [dashboardData, setDashboardData] = useState({
        totalIncome: 0,
        totalExpense: 0,
        balance: 0,
        recentTransactions: [],
    });
    const [loading, setLoading] = useState(false);

    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            const data = await getDashboardDataService();
            setDashboardData(data || {
                totalIncome: 0,
                totalExpense: 0,
                balance: 0,
                recentTransactions: [],
            });
        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return (
        <DashboardContext.Provider value={{ dashboardData, loading, fetchDashboardData }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => useContext(DashboardContext);
