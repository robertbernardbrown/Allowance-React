import axios from "axios";

export default {
    getBudget: (token, userId) => {
        return axios.get(`https://allowance-api.herokuapp.com/api/budgets/${userId}`, {headers: {Authorization: `bearer ${token}`}})
    }
}