import React, { Component } from "react";
import styled from "styled-components";

const Sidebar = styled.aside`
  height: 90vh;
  padding: 0px 12px;
  min-width: fit-content;
  background-color: black;
`;

const PlaylistOption = styled.p`
  width: fit-content;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  :hover{
    color: white;
    transition: 0.2s ease;
  }
`;

export default class SideBar extends Component {
  render() {
    return (
      <Sidebar>
        <h3>Labefy</h3>
        <input
          onChange={this.props.handlePLName}
          value={this.props.data.inputPlaylisName}
          placeholder="Nome da playlist"
        />
        <button onClick={()=>this.props.create()}>Criar nova Playlist</button>
        <p>Playlists:</p>
        {this.props.data.playlists.map((data) => {
          return (
            <PlaylistOption
              key={data.id}
              onClick={()=>this.props.setName(data.name, data.id)}
              onDoubleClick={() => this.props.delete(data.id)}
            >
              {data.name}
            </PlaylistOption>
          );
        })}
      </Sidebar>
    );
  }
}
