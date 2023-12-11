import axios from "axios";
import authHeader from "./auth-header";

const getDashboard = () => {
    return axios.get('/dashboard', {headers: authHeader()});
}

const budgetService = {
    getDashboard,
};

export default budgetService;