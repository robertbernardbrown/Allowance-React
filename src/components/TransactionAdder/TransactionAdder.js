import React from "react";
import styled from "styled-components";
import { media } from "../../utils/styles";

const TransactionAdderDiv = styled.div`
    padding: 20px;
    border-radius: 10px;
    ${media.phone``}
    ${media.tablet``}
    ${media.desktop``}
`;

const TransactionAdderButton = styled.button`
    background-color: green;
    color: white;
    border-radius: 10px;
    font-size: 1em;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    ${media.phone``}
    ${media.tablet``}
    ${media.desktop``}
`;

const TransactionAdderInput = styled.div`
    padding-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    ${media.phone``}
    ${media.tablet``}
    ${media.desktop``}
`;

// Get next five years for budget dropdown
const nextFiveYears = () => {
    const yearArray = [];
    const date = new Date();
    for (let i=0;i<5;i++){
        let year = date.getFullYear() + i;
        yearArray.push(year);
    }
    return yearArray;
}

const TransactionAdder = (props) => (
    <TransactionAdderDiv>
        <TransactionAdderInput>
            <label htmlFor="transactionInput" style={{paddingRight:"10px"}}> Transaction: </label>
            <input type="text" style={{width:"100%"}} name="transaction" placeholder="0" className="transactionInput" id="transactionInput"></input>
        </TransactionAdderInput>
        <TransactionAdderInput>
            <label htmlFor="monthInput" style={{paddingRight:"10px"}}> Month: </label>
            <select id="monthInput" style={{width:"100%"}}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
        </TransactionAdderInput>
        <TransactionAdderInput>
            <label htmlFor="yearInput" style={{paddingRight:"10px"}}> Year: </label>
            <select id="yearInput" style={{width:"100%"}}>
                {nextFiveYears().map((cur, i) => { return <option key={i} value={cur}>{cur}</option>})}
            </select>
        </TransactionAdderInput>
        <TransactionAdderButton>Add Transaction</TransactionAdderButton>
    </TransactionAdderDiv>
);

export default TransactionAdder;