import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  min-width: 300px;
  select {
    font-size: 25px;
    padding: 1.5rem;
    border: none;
    border-radius: 10px;
    background: var(--cream);
    cursor: pointer;
    font-style: italic;
  }
`;
