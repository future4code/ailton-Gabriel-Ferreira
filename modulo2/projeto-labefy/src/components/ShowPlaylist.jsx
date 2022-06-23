import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

export default class ShowPlaylist extends Component {
  state = {
    inputNome: "",
    inputArtista: "",
    inputUrl: "",
    musgas: [],
  };

  onChangeName = (e) => {
    this.setState({ inputNome: e.target.value });
  };
  onChangeArtista = (e) => {
    this.setState({ inputArtista: e.target.value });
  };
  onChangeUrl = (e) => {
    this.setState({ inputUrl: e.target.value });
  };
  render() {
    return (
      <>
        <div>
          <input
            onChange={this.onChangeName}
            value={this.state.inputNome}
            placeholder="Nome da Musica"
          />
          <input
            onChange={this.onChangeArtista}
            value={this.state.inputArtista}
            placeholder="Artista ou banda"
          />
          <input
            onChange={this.onChangeUrl}
            value={this.state.inputUrl}
            placeholder="Url da musica (no Spotify)"
          />
          <button onClick={this.props.criar}>Adicionar Musica á playlist</button>
        </div>
        <div>
          {this.props.musgas?.map((data) => {
            return (
              <div>
                <p>{data.name}</p>
                <p>{data.artist}</p>
                <p>{data.url}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
