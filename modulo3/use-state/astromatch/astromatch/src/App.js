import GlobalStyled from "./components/GlobalStyled";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 390px;
  height: 844px;
`;

const AppHeader = styled.div`
  border: 1px solid #bbb ;
  width: 100%;
  height: 64px;
  >p {
    color: #303030;
  }
`;

const AppBody = styled.div`
  border: 1px solid #bbb ;
  width: 100%;
  height: 100%;
  background-color: #bbb;
  >p {
    color: #303030;
  }
`;

const AppFooter = styled.div`
  border: 1px solid #bbb ;
  width: 100%;
  height: 64px;
  >p {
    color: #303030;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Container>
        <AppContainer>
          <AppHeader>
            <p>App Header</p>
          </AppHeader>
          <AppBody>
            <p>App Body</p>
          </AppBody>
          <AppFooter>
            <p>App Footer</p>
          </AppFooter>
        </AppContainer>
      </Container>
    </>
  );
};

export default App;
