import styled from "styled-components";

interface DisplayContainerProps {
  spanColor: string;
  cursor: string;
  background: string;
}

interface ModalMessageProps {
  spanColor: string;
}

export const DisplayContainer = styled.div<DisplayContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 3.8rem;
  background-color: ${(props) => props.background};
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  border: 3px solid white;
  cursor: ${(props) => props.cursor};

  .displayNameMobile,
  .displayNumberConfirmed {
    display: flex;
    flex-direction: column;
  }

  .displayNameMobile {
    small {
      &:last-child {
        margin-top: 0.3rem;
      }
    }
  }

  .displayNumberConfirmed {
    margin-left: 2rem;
    align-items: center;
    span {
      display: block;
      content: "";
      margin-top: 0.2rem;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid white;
      background-color: ${(props) => props.spanColor};
    }
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

export const HorizontalDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4.3rem;
  background: white;
  width: 100%;
  &:nth-child(2n + 1) {
    background: var(--gray);
  }

  .horizontalDisplayMessage{
    margin-left: 1rem;
    opacity: 0.3;
    text-transform: ;
  } 

`;
