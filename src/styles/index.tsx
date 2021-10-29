import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("./background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .booking {
    z-index: 1;
  }
`;
export const BackgroundColor = styled.main`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.7;
`;

export const theme = {
  colors: {
    background: "#121214",
    text: "#e1e1e6",
    primary: "#22314D",
  },
};
