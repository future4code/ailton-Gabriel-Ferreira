import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  height: 100%;
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
              <div key={data.id}>
                <p onClick={()=>this.props.actualUrl(data.url)}>{data.name}</p>
                <p>{data.artist}</p>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}
