import React, { Component } from "react";
import Header from "../../components/Header";
import MainDisplay from "../../components/MainDisplay";

class Main extends Component {

    render(){
        return(
            <React.Fragment>
                <Header/>
                <MainDisplay/>
            </React.Fragment>
        )
    }
}

export default Main;