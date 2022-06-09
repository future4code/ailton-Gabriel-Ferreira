import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/id/10/50/50'}
          fotoPost={'https://picsum.photos/id/11/200/200'}
        />
        <Post
          nomeUsuario={'Jose'}
          fotoUsuario={'https://picsum.photos/id/12/50/50'}
          fotoPost={'https://picsum.photos/id/13/200/200'}
        />
        <Post
          nomeUsuario={'Dionisio'}
          fotoUsuario={'https://picsum.photos/id/14/50/50'}
          fotoPost={'https://picsum.photos/id/15/200/200'}
        />
      </MainContainer>
    );
  }
}

export default App;
