import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

// export const FormAdmContainer = styled.form``;

export const BookingContainer = styled.table`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: blue;
  max-width: 1200px;
  margin-top: 2rem;
  margin: 0 auto;
  .bookingDateContainer {
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 1rem;
  padding: 1rem;
  overflow: scroll;
  .dashboardTimeContainer {
    display: flex;
    flex-direction: column;
    small {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 4px solid var(--gray);
      height: 4.3rem;
      width: 8rem;
      text-align: center;
      font-size:0.7rem;
      background: white;
      &:nth-child( 2n + 1 ){
        background: var(--gray);
      }

    }
  }
  .dashboardDiaplyContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    /* .display{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 4.3rem;
      background: white;
      width: 100%;
      &:nth-child( 2n + 1 ){
        background: var(--gray);
      }
    } */
  }
`;
