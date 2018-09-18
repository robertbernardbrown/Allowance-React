import React, { Component } from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = styled.header`
  padding: 4em;
  background: papayawhip;
`;

class App extends Component {
    render() {
      return (
        <Header>
          <Title>
            Hello World, this is my first styled component!
          </Title>
        </Header>
      );
    }
}

export default App;