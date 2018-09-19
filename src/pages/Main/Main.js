import React, { Component } from "react";
import Header from "../../components/Header";
import MainDisplay from "../../components/MainDisplay";
import axios from "axios";

class Main extends Component {

    state = {
        data: "",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoxOSwiaWF0IjoxNTM3MzkxMzU1LCJleHAiOjE1MzczOTQ5NTV9.FTyJk6AS9qhcQ42o940Ia0uE30Goj3QumQONHbZCCOM"
    }

    componentDidMount(){
        axios.get("https://allowance-api.herokuapp.com/api/budgets/1", {headers: {Authorization: `bearer ${this.state.token}`}})
        .then(res => {
            console.log(res);
            this.setState({
                data: res.data.message
            })
            // let dataArr = [];
            // res.map(cur=>{ return dataArr.push(cur);})
        })
        .catch(err => {
            this.setState({
                data: err.message
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <MainDisplay budget={this.state.data}/>
            </React.Fragment>
        )
    }
}

export default Main;