import axios from "axios";

export default {
    login: userData =>
            axios.post(`https://allowance-api.herokuapp.com/api/login`,  userData),
    getBudget: (token, userId) => {
        return axios.get(`https://allowance-api.herokuapp.com/api/budgets/${userId}`, {headers: {Authorization: `bearer ${token}`}})
    }
}