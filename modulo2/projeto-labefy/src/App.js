import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Center from "./components/Center";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
`;

const DivPrincipal = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  background-color: #181818;
`;

const auth = { headers: { Authorization: "gabriel-ferreira-ailton" } };
const url1 = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;

export default class App extends Component {
  state = {
    inputPlaylisName: "",
    playlists: [],
    tracks: [],
    actualPlaylist: "",
    actualPlaylistId: "",
    inputMusicName: "",
    inputArtistName: "",
    InputUrl: "",
  };
  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async() => {
    try {
  const res = await axios.get(url1, auth)
  console.log('Função getAllPlaylist executou')
      this.setState({ playlists: res.data.result.list });
    }
    catch (err) {
      console.log(err)
    }
  }

  getPlaylistTracks = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.actualPlaylistId}/tracks`;
    try {
      const res = await axios.get(url, {
        headers: { Authorization: "gabriel-ferreira-ailton" },
      });
      console.log('Função getPlaylistTracks executou');
      this.setState({ tracks: res.data.result.tracks });
      this.getAllPlaylists();
    } catch (err) {
      console.log(err);
    }
  };

  createPlaylis = (name) => {
    const body = {
      name: this.state.inputPlaylisName,
    };
    axios.post(url1, body, auth).then((res) => {
      console.log(res);
      this.getAllPlaylists();
      this.setState({ actualPlaylist: name });
    });
  };

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios.delete(url, auth).then((res) => {
      console.log(res);
      this.getAllPlaylists();
    });
  };

  addTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.inputMusicName,
      artist: this.state.inputArtistName,
      url: this.state.InputUrl,
    };
    axios
      .post(url, body, auth)
      .then((res) => {
        console.log(res);
        this.getAllPlaylists();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(
      this.state.inputMusicName,
      this.state.inputArtistName,
      this.state.InputUrl
    );
    console.log(id);
  };

  handleInputPlaylistName = (e) => {
    this.setState({ inputPlaylisName: e.target.value });
  };

  handleInputMusicName = (e) => {
    this.setState({ inputMusicName: e.target.value });
  };

  handleInputArtistName = (e) => {
    this.setState({ inputArtistName: e.target.value });
  };

  handleInputUrl = (e) => {
    this.setState({ InputUrl: e.target.value });
  };

  setAcualPlaylist = (name, id) => {
    this.setState({ actualPlaylist: name });
    this.setState({ actualPlaylistId: id });
    this.getPlaylistTracks();
    // this.getAllPlaylists()
  };

  render() {
    return (
      <Container>
        <DivPrincipal>
          <Sidebar
            data={this.state}
            handlePLName={this.handleInputPlaylistName}
            create={this.createPlaylis}
            delete={this.deletePlaylist}
            setName={this.setAcualPlaylist}
          />
          {this.state.actualPlaylist && (
            <Center
              name={this.state.actualPlaylist}
              id={this.state.actualPlaylistId}
              handleM={this.handleInputMusicName}
              handleA={this.handleInputArtistName}
              handleU={this.handleInputUrl}
              inputM={this.state.inputMusicName}
              inputA={this.state.inputArtistName}
              inputU={this.state.InputUrl}
              addTrack={this.addTrackToPlaylist}
              getPlaylist={this.getAllPlaylists}
              tracks={this.state.tracks}
            />
          )}
        </DivPrincipal>
        <Player />
      </Container>
    );
  }
}
