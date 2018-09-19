import React, { Component } from "react";
import Header from "../../components/Header";
import MainDisplay from "../../components/MainDisplay";
import axios from "axios";

class Main extends Component {

    state = {
        data: "",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoxOSwiaWF0IjoxNTM3MzgzNDQ0LCJleHAiOjE1MzczODcwNDR9.NOZ3TmRx8TNV1Qze_8Zq638OG2HhTQ9dq9hi2yir88g"
    }

    componentDidMount(){
        console.log("mounter")
        axios.get("https://allowance-api.herokuapp.com/api/budgets/1", {headers: {Authorization: `bearer ${this.state.token}`}})
        .then( res => {
            console.log(res);
            this.setState({
                data: res.data.message
            }, console.log(this.state.data))
            // let dataArr = [];
            // res.map(cur=>{ return dataArr.push(cur);})
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