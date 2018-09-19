import React from "react";
import styled from "styled-components";
import { media } from "../../styles/utils";

const Container = styled.section`
background: rgba(255,255,255,.9);
width: 80%;
height: 100%;
display: inline-block;
${media.phone``}
${media.tablet``}
${media.desktop``}
`;

const Inner = styled.section`
background: rgba(255,255,255,.9);
${media.phone``}
${media.tablet``}
${media.desktop``}
`;

const MainDisplay = (props) => (
    <Container>
        {<Inner>{props.budget}</Inner>}
    </Container>
)

export default MainDisplay;