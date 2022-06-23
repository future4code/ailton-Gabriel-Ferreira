import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import CenterSection from "./CenterSection";

const Container = styled.div`
  background-color: black;
  width: 12.5vw;
  height: 90vh;
  position: fixed;
`;

const OptionPlaylist = styled.p`
  width: fit-content;
  user-select: none;
  cursor: pointer;
`;

const SectionPlaylistNames = styled.section`
  border-top: 1px solid #595959;
  padding: 4px 0px;
  margin: 4px 0px;
`;

export default class SideBar extends Component {
  state = {
    inputBereguejhonson: "",
    playlist: [],
    bereguejhonson: false,
    showing: false,
    playlistShowingName: "",
    playlistShowingId: "",
    musgas: [],
  };

  componentDidMount() {
    this.pegarBereguejhonson();
    this.catarMusga()
  }

  criaMusga = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;
    const body = {
      name: this.state.inputNome,
      artist: this.state.inputArtista,
      url: this.state.inputUrl,
    };
    axios
      .post(url, body, {
        headers: { Authorization: "gabriel-ferreira-ailton" },
      })
      .then((res) => {
        console.log(res);
        this.catarMusga();
      });
  };

  catarMusga = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;
    axios
      .get(url, {
        headers: { Authorization: "gabriel-ferreira-ailton" },
      })
      .then((res) => {
        this.setState({ musgas: res.data.result.tracks });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  apareceBereguejhonson = () => {
    this.setState({ bereguejhonson: !this.state.bereguejhonson });
  };

  turnShowing = (name, id) => {
    this.setState({ showing: true });
    this.setState({ playlistShowingName: name });
    this.setState({ playlistShowingId: id });
    this.catarMusga()
  };

  criaBereguejhonson = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;
    const body = {
      name: this.state.inputBereguejhonson,
    };
    axios
      .post(url, body, {
        headers: { Authorization: "gabriel-ferreira-ailton" },
      })
      .then((res) => {
        console.log(res);
        this.pegarBereguejhonson();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  pegarBereguejhonson = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;
    axios
      .get(url, { headers: { Authorization: "gabriel-ferreira-ailton" } })
      .then((res) => {
        this.setState({ playlist: res.data.result.list });
      });
  };

  handleInput = (e) => {
    this.setState({ inputBereguejhonson: e.target.value });
  };

  render() {
    return (
      <Container>
        {this.state.showing && (
          <CenterSection
            musgas={this.state.musgas}
            criar={this.criaMusga}
            pegar={this.catarMusga}
            name={this.state.playlistShowingName}
            id={this.state.playlistShowingId}
          />
        )}
        <h2>Labefy</h2>
        <div>
          <p onClick={this.pegarBereguejhonson}>Inicio</p>
          <p>Procurar</p>
          <p>Sua biblioteca</p>
        </div>
        <div>
          <OptionPlaylist onClick={this.apareceBereguejhonson}>
            Criar Playlist
          </OptionPlaylist>
          {this.state.bereguejhonson && (
            <div>
              <input
                value={this.state.inputBereguejhonson}
                onChange={this.handleInput}
                placeholder="Nome da playlist"
              />
              <button onClick={this.criaBereguejhonson}>Criar</button>
            </div>
          )}
          <p>Musicas curtidas</p>
        </div>
        <SectionPlaylistNames>
          {this.state.playlist.map((data) => {
            return (
              <>
                <p
                  onClick={() => this.turnShowing(data.name, data.id)}
                  key={data.id}
                >
                  {data.name}
                </p>
              </>
            );
          })}
        </SectionPlaylistNames>
      </Container>
    );
  }
}
