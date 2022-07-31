import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: fit-content;
  transition: 1s ease-in-out;
  > input {
    border: 1px solid #d5d8de;
    padding: 16px;
    width: 364px;
    height: 60px;
    outline: 0;
    :focus ~ label {
      transition: 0.25s ease;
      transform: translateY(-20px);
      font-size: 0.7rem;
    }
    :valid ~ label {
      transform: translateY(-20px);
      font-size: 0.7rem;
    }
  }
  > label {
    font-size: 1rem;
    color: #323941;
    position: absolute;
    left: 16px;
    bottom: 20px;
  }
`;
