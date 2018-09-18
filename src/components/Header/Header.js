import React, { Component } from 'react';
import styled, { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

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
  padding: 2em;
`;

class App extends Component {
    render() {
      return (
        <Header>
          <Title>
            Allowance
          </Title>
        </Header>
      );
    }
}

export default App;