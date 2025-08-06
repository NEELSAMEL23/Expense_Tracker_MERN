import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

export const getDashboardDataService = async () => {
    try {
        const { data } = await axiosInstance.get(API_PATHS.Dashboard.GET_ALL);
        return data;
    } catch (error) {
        throw error.response?.data || { message: "Failed to fetch dashboard data" };
    }
};
