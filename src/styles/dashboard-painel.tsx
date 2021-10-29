import styled from "styled-components";

interface SpanColorProps {
  spanColor: string;
}

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  nav {
  }
`;

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1500px;
  padding: 1rem;
  margin: 0 auto;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;

    small {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const SpanColor = styled.span<SpanColorProps>`
  display: block;
  content: "";
  width: 13px;
  height: 13px;
  border: 1px solid white;
  background-color: ${(props) => props.spanColor};
  margin-right: 0.2rem;
`;

export const BookingContainer = styled.table`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1500px;
  background-color: var(--white);
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  margin: 0 auto;
  padding: 1rem;

  button {
    padding: 0.5rem;
    background: var(--blue-50);
    color: var(--blue-900);
    font-weight: bold;
    font-size: 0.8rem;
    justify-self: flex-end;
  }
`;

export const ModalMessageForm = styled.div`
  form {
  }
`;

export const NavBarContainer = styled.nav`
  padding: 1rem;
  width: 100%;
  background-color: var(--blue-900);
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1080px;
    margin: 0 auto;
    h3 {
      text-transform: capitalize;
      color: white;
    }

    a {
      color: var(--white);
      margin-right: 1rem;
    }
    button {
      align-self: flex-end;
      padding: 0.5rem;
      background: var(--blue-50);
      color: var(--blue-900);
      font-weight: bold;
    }
  }
`;
