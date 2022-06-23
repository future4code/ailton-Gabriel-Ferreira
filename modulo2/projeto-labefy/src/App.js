import React, { Component } from "react";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <MusicPlayer />
      </Container>
    );
  }
}
