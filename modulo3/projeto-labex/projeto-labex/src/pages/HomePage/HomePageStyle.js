import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkgray;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(${"https://images7.alphacoders.com/805/805197.jpg"});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  > div {
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media only screen and (min-width: 421px) and (max-width: 820px) {
      width: 95%;
    }
    @media (max-width: 480px) {
        width: 100%;
        font-size: 1rem;
    }
  }
`;

export const Explanation = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 50vh;
  background-color: #141414;
  color: #fff;
  font-size: 1.5rem;
  @media only screen and (min-width: 421px) and (max-width: 820px) {
    height: fit-content;
  }
  @media (max-width: 480px) {
    height: fit-content;
  }
`;

export const ExplanationInternDiv = styled.div`
  display: flex;
  gap: 24px;
  padding: 8px;
  flex-direction: ${(props) => (props.direction ? `row` : `row-reverse`)};
  align-items: center;
  width: 60%;
  @media (min-width: 481px) and (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
  }
`;