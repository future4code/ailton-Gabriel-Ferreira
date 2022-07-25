import PokeCard from "./components/PokeCard";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
background-color: white;
width: 100vw;
height: 100vh;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <PokeCard />
      </Container>
    </>
  );
}

export default App;
