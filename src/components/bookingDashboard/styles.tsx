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
  margin-top: 2rem;
  .bookingDateContainer {
  }
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  table {
    display: inline-block;
    overflow-x: scroll;
    margin: 0 auto;
    thead {
      tr {
        background: yellow;
        th {
          min-width: 10rem;
        }
      }
    }
    tbody {
      tr {
        td {
          min-width: 10rem;
        }
      }
    }
  }
`;
