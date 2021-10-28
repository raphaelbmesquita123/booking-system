import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 1rem;
  overflow: scroll;
  .dashboardTimeContainer {
    display: flex;
    flex-direction: column;
    small {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 4px solid var(--gray);
      height: 3.2rem;
      width: 8rem;
      text-align: center;
      font-size: 0.7rem;
      background: var(--gray);
      &:nth-child(2n + 1) {
        background: white;
      }
    }
  }
  .dashboardDiaplyContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;


