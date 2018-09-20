import React from "react";
import styled from "styled-components";
import { media } from "../../utils/styles";

const Container = styled.section`
background: rgba(255,255,255,.9);
width: 80%;
height: 100%;
display: inline-block;
${media.phone``}
${media.tablet``}
${media.desktop``}
`;

const Display = ({ component: Component, ...rest }) => (
    <Container>
        <Component {...rest}/>
    </Container>
)

export default Display;