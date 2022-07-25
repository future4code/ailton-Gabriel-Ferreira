import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  height: 100%;
`;

const TrackName = styled.div`
  display: flex;
  border: 1px solid white;
  width: fit-content;
  padding: 0px 4px;
  border-radius: 8px;
  margin: 8px 4px;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
    transition: 0.2s ease;
  }
`;

export default class Center extends Component {
  state = {
    creating: false,
  };

  setCreating = () => {
    this.setState({ creating: !this.state.creating });
  };
  
  render() {
    return (
      <Container>
        <h1>{this.props.name}</h1>
        {this.state.creating ? (
          <>
            <input
              value={this.props.inputM}
              onChange={this.props.handleM}
              placeholder="Nome da Musica"
            />
            <input
              value={this.props.inputA}
              onChange={this.props.handleA}
              placeholder="Artista ou Banda"
            />
            <input
              value={this.props.inputU}
              onChange={this.props.handleU}
              placeholder="url (no Spotify)"
            />
            <button onClick={() => this.props.addTrack(this.props.id)}>
              Adicionar
            </button>
            <button onClick={this.setCreating}>Cancelar</button>
          </>
        ) : (
          <button onClick={this.setCreating}>
            Adicionar musica a playlist
          </button>
        )}
        <div>
          {this.props.tracks.map((data) => {
            return (
              <TrackName key={data.id}>
                <p onClick={()=>this.props.actualUrl(data.url)}>{data.name} - {data.artist}</p>
              </TrackName>
            );
          })}
        </div>
      </Container>
    );
  }
}


<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/352FuGmGJClPjojSYjNrXG?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>