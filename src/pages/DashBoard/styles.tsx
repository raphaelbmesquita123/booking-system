import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-900);
  form {
    display: flex;
    flex-direction: column;
    input {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 10px;

      margin-top: 1rem;
      &:first-child {
        margin-top: none;
      }
    }
    span {
      background-color: var(--red);
      color: white;
      text-align: center;
      margin-top: 0.2rem;
      border-radius: 10px;
      padding: 0.2rem 0;
      font-size: 0.8rem;
    }
    button {
      align-self: flex-end;
      margin-top: 1rem;
      padding: 1rem;
      background: var(--blue-50);
      color: var(--blue-900);
      font-weight: bold;
    }
  }
`;
