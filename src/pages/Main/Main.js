import React, { Component } from "react";
import Header from "../../components/Header";
import Display from "../../components/Display";
import API from "../../utils/API";
import styled from "styled-components";
import { media } from "../../utils/styles";
import BarChart from "../../components/BarChart";
import BudgetAdder from "../../components/BudgetAdder";
import TransactionAdder from "../../components/TransactionAdder";

class Main extends Component {

    state = {
        budgets: "",
    }

    componentDidMount(){
        API.getBudget(this.props.token, this.props.userId)
        .then(res => {
            console.log(res);
            this.setState({
                budgets: res.data.message
            })
            // let dataArr = [];
            // res.map(cur=>{ return dataArr.push(cur);})
        })
        .catch(err => {
            this.setState({
                budgets: err.message
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <Display budget={this.state.budgets} component={BarChart}/>
                <Display component={BudgetAdder}/>
                <Display component={TransactionAdder}/>
            </React.Fragment>
        )
    }
}

export default Main;