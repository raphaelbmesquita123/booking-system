import styled from "styled-components";

interface FormContainerProps {
  top: string;
}

export const Container = styled.div`
  position: relative;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--gray-texas);
  img {
    position: absolute;
    left: 2rem;
    top: 2rem;
    height: 80px;
    z-index: 2;
    background-color: var(--gray-texas);
    cursor: pointer;
    @media (max-width: 500px) {
      left: 50%;
      transform: translateX(-50%);
      height: 50px;
    }
  }
  .formButtons {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 600px;
    justify-content: space-between;
    top: 1rem;
    right: 1rem;
    svg {
      font-size: 3rem;
      color: var(--cream);
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

export const FormContainer = styled.form<FormContainerProps>`
  display: block;
  position: relative;
  top: ${(props) => props.top};
  width: 80vw;
  height: 600px;
  min-width: 280px;
  transition: top 0.5s ease-in-out;

  .bookingDetails,
  .formRequests,
  .formContacts,
  .formTime,
  .formQuantityOfPeople,
  .formDate {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    min-width: 300px;
    h2 {
      color: var(--cream);
      margin-bottom: 1rem;
    }
    small{
      color: var(--gray-500);
      width: 80%;
      min-width: 260px;
      text-align: center;
    }
  }
  .bookingDetails {
    align-items: flex-start;
    color: var(--cream);
    width: 70%;
    margin: 0 auto;
    min-width: 260px;
    ul {
      li {
        margin-top: 1rem;
        text-align: justify;
      }
    }

    label {
      position: absolute;
      display: flex;
      align-items: center;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      input {
        margin-right: 1rem;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    @media (max-width: 500px) {
      align-items: center;
      label {
        input {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .formDate {
    label {
      input {
        font-size: 30px;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: var(--cream);
        cursor: pointer;
        @media (max-width: 500px) {
          font-size: 20px;
        }
      }
    }
  }
  .formQuantityOfPeople {
    label {
      select {
        font-size: 30px;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: var(--cream);
        cursor: pointer;
      }
    }
  }
  /* .formTime {
    label {
      select {
        font-size: 25px;
        padding: 1.5rem;
        border: none;
        border-radius: 10px;
        background: var(--cream);
        cursor: pointer;
        option{
        }
      }
    }
  } */
  .formContacts {
    label {
      input {
        font-size: 30px;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: var(--cream);
        margin-top: 1rem;
        @media (max-width: 500px) {
          font-size: 20px;
        }
      }
    }
  }
  .formRequests {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    label {
      textarea {
        margin-top: 1rem;
        width: 64vw;
        min-width: 260px;
        height: 250px;
        padding: 1rem;

        font-size: 20px;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: var(--cream);
      }
    }
    .bookingButton {
      margin-top: 1rem;
      padding: 1rem 3rem;
      border: none;
      border-radius: 10px;
      background: var(--cream);
      align-self: flex-end;
      cursor: pointer;

      &:active{
        transform: scale(0.98);
      }
      @media (max-width: 500px) {
        align-self: center;
      }
    }
  }
`;
