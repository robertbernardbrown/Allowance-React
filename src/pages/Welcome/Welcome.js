import React from "react";
import Display from "../../components/Display";
import Greeting from "../../components/Greeting";
import API from "../../utils/API";
import styled from "styled-components";
import { media } from "../../utils/styles";

// const TransactionAdderDiv = styled.div`
//     padding: 20px;
//     border-radius: 10px;
//     ${media.phone``}
//     ${media.tablet``}
//     ${media.desktop``}
// `;

const Welcome = (props) => (
    <React.Fragment>
        <Display component={Greeting}/>
    </React.Fragment>
);

export default Welcome;