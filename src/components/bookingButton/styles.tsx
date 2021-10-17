import styled from 'styled-components'

interface FormContainerProps {
  display: string
}

export const ButtonContainer = styled.div`
    background: orange;
    border: green;
    padding: 1rem;
    border: 2px solid green;
    cursor: pointer;
`

export const FormContainer = styled.form<FormContainerProps>`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;

  button {
    background: orange;
  }
`
