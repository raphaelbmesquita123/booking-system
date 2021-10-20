import React, { useState } from "react";
import Modal from "react-modal";

//styles
import {
  DisplayContainer,
  ModalMessage,
  HorizontalDisplayContainer,
} from "./styles";

interface ResevationsProps {
  id: number;
  amountOfPeople: string;
  name: string;
  confirmed: boolean;
  mobileNumber: string;
  email: string;
  hasRequest: boolean;
  request?: string;
}

interface BookingDisplayProps {
  arrayBookings?: {
    id: number;
    time: string;
    resevations?: ResevationsProps[];
  };
}

export function BookingDisplay({ arrayBookings }: BookingDisplayProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <HorizontalDisplayContainer>
        {arrayBookings?.resevations === undefined ? (
          <span className='horizontalDisplayMessage'>
            <i>No bookings yet</i>
          </span>
        ) : (
          arrayBookings?.resevations.map((x) => {
            function click() {
              x.hasRequest && openModal();
            }

            return (
              <div key={x.id}>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  ariaHideApp={false}
                >
                  <ModalMessage
                    spanColor={x.confirmed ? "var(--green)" : "var(--red)"}
                  >
                    <div className='modalClientInfo'>
                      <h4>{x.name}</h4>
                      <h4>{x.mobileNumber}</h4>
                      <h4>{x.email}</h4>
                      <h4>Amount of People: {x.amountOfPeople}</h4>
                    </div>
                    <div className='modalClientRequest'>
                      <h4>Request: </h4>
                      <strong>{x.request}</strong>
                    </div>
                    <span></span>
                    <button onClick={closeModal}>Close</button>
                  </ModalMessage>
                </Modal>
                <DisplayContainer
                  spanColor={x.confirmed ? "var(--green)" : "var(--red)"}
                  background={x.hasRequest ? "var(--blue-50)" : "var(--gray)"}
                  cursor={x.hasRequest ? "pointer" : "default"}
                  onClick={() => click()}
                >
                  <div className='displayNameMobile'>
                    <small>{x.name}</small>
                    <small>{x.mobileNumber}</small>
                  </div>
                  <div className='displayNumberConfirmed'>
                    <small>{x.amountOfPeople}</small>
                    <span></span>
                  </div>
                </DisplayContainer>
              </div>
            );
          })
        )}
      </HorizontalDisplayContainer>
    </>
  );
}
