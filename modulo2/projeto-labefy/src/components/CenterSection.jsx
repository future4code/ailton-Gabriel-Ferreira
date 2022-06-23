import React, { Component } from "react";
import styled from "styled-components";
import ShowPlaylist from "./ShowPlaylist";

const Container = styled.section`
  width: 87.5vw;
  height: 100vh;
  background-color: #000226;
  margin-left: 12.5vw;
  position: fixed;
`;

export default class CenterSection extends Component {
  render() {
    return (
      <Container>
        <h1>{this.props.name}</h1>
        <ShowPlaylist id={this.props.id}/>
      </Container>
    );
  }
}
