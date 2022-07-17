import styled from "styled-components";

export const Centralizer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 300px;
    padding: 1%;
    border-radius: 12px;
    border: 1px solid #fff;
    gap: 4px;
    > input {
      width: 90%;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      border: 1px solid #fff;
      padding: 2px 1px;
      border-radius: 4px;
      ::placeholder {
        color: #fff;
        background-color: #000;
      }
      :hover {
        background-color: #fff;
      }
    }
    > select {
      width: 90%;
      background: rgba(0, 0, 0, 0.9);
      color: #fff;
      border: 1px solid #fff;
      padding: 2px 1px;
      border-radius: 4px;
    }
    > button {
      width: 90%;
      background: none;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.2s ease;
      :hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
