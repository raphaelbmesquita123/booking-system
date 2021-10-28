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
  amount_of_people: string;
  name: string;
  confirmed: boolean;
  contact_number: string;
  email: string;
  has_request: boolean;
  request?: string;
}


export function BookingDisplay({ arrayBookings }: any) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clientModalData, setClientModalData] = useState<ResevationsProps>();

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

  function openModalRequest(client: ResevationsProps) {
    setClientModalData(client);
    openModal();
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalMessage
          spanColor={clientModalData?.confirmed ? "var(--green)" : "var(--red)"}
        >
          <div className='modalClientInfo'>
            <h4>{clientModalData?.name}</h4>
            <h4>{clientModalData?.contact_number}</h4>
            <h4>{clientModalData?.email}</h4>
            <h4>Amount of People: {clientModalData?.amount_of_people}</h4>
          </div>
          {clientModalData?.has_request && (
            <div className='modalClientRequest'>
              <h4>Request: </h4>
              <strong>{clientModalData?.request}</strong>
            </div>
          )}
          <span></span>
          <button onClick={closeModal}>Close</button>
        </ModalMessage>
      </Modal>

      <HorizontalDisplayContainer>
        {arrayBookings === undefined ? (
          <span className='horizontalDisplayMessage'>
            <i>No bookings yet</i>
          </span>
        ) : (
          arrayBookings.map((x: any) => {
            return (
              <div key={x.id}>
                <DisplayContainer
                  spanColor={x.confirmed ? "var(--green)" : "var(--red)"}
                  background={x.has_request ? "var(--blue-10)" : "var(--gray)"}
                  onClick={() => openModalRequest(x)}
                >
                  <div className='displayNameMobile'>
                    <small>{x.name}</small>
                  </div>
                  <div className='displayNumberConfirmed'>
                    <small>{x.amount_of_people}</small>
                  </div>
                  <span></span>
                </DisplayContainer>
              </div>
            );
          })
        )}
      </HorizontalDisplayContainer>
    </>
  );
}
