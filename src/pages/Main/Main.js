import React, { Component } from "react";
import Header from "../../components/Header";
import MainDisplay from "../../components/MainDisplay";
import API from "../../utils/API";

class Main extends Component {

    state = {
        data: "",
    }

    componentDidMount(){
        API.getBudget(this.props.token, this.props.userId)
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