import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 12px;
  width: 350px;
  height: 350px;
  padding: 4px;
  flex: none;
  > p {
    width: 100%;
  }
`;

export const Container = styled.section`
  display: flex;
  gap: 8px;
  padding: 64px 12px 12px 12px;
  overflow: auto;
  background-color: rgba(0,0,0,0.8);
  border-bottom: 1px solid #bbb;
  ::-webkit-scrollbar {
    display: none;
  }
  transition: 1s ease;
`;

export const LeftRightButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PageBg = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  background-image: url(${"https://images7.alphacoders.com/805/805197.jpg"});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const EmptyArrayMessageDiv=styled.div`
height: 350px;
background-color: lime;
`