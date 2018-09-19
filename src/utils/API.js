import axios from "axios";

export default {
    getBudget: (token) => {
        return axios.get("https://allowance-api.herokuapp.com/api/budgets/1", {headers: {Authorization: `bearer ${token}`}})
    }
}