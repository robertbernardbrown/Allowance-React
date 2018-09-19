import React from "react";
import styled from "styled-components";
import { media } from "../../styles/utils";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: green;
  background: rgba(255,255,255,.9);
  ${media.phone`
  font-size: 5em`}
  ${media.tablet`
  font-size: 5em`}
  ${media.desktop`
  font-size: 5em`}
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderComp = () => (
  <Header>
    <Title>
      Allowance
    </Title>
  </Header>
);

export default HeaderComp;