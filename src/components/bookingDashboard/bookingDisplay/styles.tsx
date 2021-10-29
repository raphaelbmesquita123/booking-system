import styled from "styled-components";

interface DisplayContainerProps {
  spanColor: string;
  background: string;
}

interface ModalMessageProps {
  spanColor: string;
}

export const HorizontalDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3.2rem;
  width: 100%;
  background: var(--gray);
  &:nth-child(2n + 1) {
    background: white;
  }

  .horizontalDisplayMessage {
    margin-left: 1rem;
    opacity: 0.3;
    font-size: 0.8rem;
  }
`;

export const DisplayContainer = styled.div<DisplayContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 2.8rem;
  background-color: ${(props) => props.background};
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  border: 3px solid white;
  cursor: pointer;

  .displayNameMobile,
  .displayNumberConfirmed {
    display: flex;
    flex-direction: column;
  }

  .displayNameMobile {
    small {
      font-size: 0.6rem;
    }
  }

  .displayNumberConfirmed {
    margin-left: 1rem;
    align-items: center;
    font-size: 0.7rem;
  }
  span {
    position: absolute;
    display: block;
    content: "";
    width: 80%;
    height: 5px;
    border: 1px solid white;
    background-color: ${(props) => props.spanColor};
    bottom: -1px;
    left: 50%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transform: translateX(-50%);
  }
`;

export const ModalMessage = styled.div<ModalMessageProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 40vw;
  min-width: 300px;
  z-index: 2;

  .modalClientInfo {
    background: var(--gray);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
    h4 {
      margin-top: 0.5rem;
      &:first-child {
        margin-top: 0rem;
      }
    }
  }

  .modalClientRequest {
    margin-top: 1rem;
    border-radius: 1rem;
    padding: 1rem;
    text-align: justify;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
    max-height: 300px;
    overflow-y: scroll;
    h4 {
      margin-bottom: 1rem;
    }
  }
  span {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    content: "";
    margin-top: 0.2rem;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 1px solid white;
    background-color: ${(props) => props.spanColor};
  }
  button {
    align-self: flex-end;
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--red);
    color: white;
  }
`;
