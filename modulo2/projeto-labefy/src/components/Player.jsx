import React, { Component } from "react";
import styled from "styled-components";

const MusicplayerContainer = styled.section`
  border-top: 1px solid #3b3b3b;
`;

export default class Player extends Component {
  render() {
    return (
      <MusicplayerContainer>
        <iframe
          // style="border-radius:12px"
          src={this.props.url}
          width="100%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </MusicplayerContainer>
    );
  }
}