import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Modal from "react-modal";

//styles
import {
  BookingContainer,
  ColorsContainer,
  DashboardContainer,
  ModalMessageForm,
  NavBarContainer,
  SpanColor,
} from "../../../styles/dashboard-painel";

//components
import { BookingDashboard } from "../../../components/bookingDashboard";

//hooks
import { useBooking } from "../../../hooks";
import axios from "axios";
import { BookingForm } from "../../../components/bookingForm";

export default function Painel() {
  const { user, handleUserLoginOut, today, handleDateChange } = useBooking();
  const [loading, setLoading] = useState(false);
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

  function hadleFormDateChange(date: string) {
    handleDateChange(date);
  }

  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!user) {
      Router.push("/DashBoard");
    } else {
      setLoading(false);
    }
  }, [user]);

  // async function handleTest() {
  //   await axios
  //     .get(
  //       "https://api.sendmode.com/httppost.aspx?Type=sendparam&username=michael.p.ryan@me.com&password=Setexas2864@&numto=353834280065&data1=Hello_World!"
  //     )
  //     .then((response: any) => {
  //       return response.json();
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // }

  return (
    <DashboardContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalMessageForm>
          <BookingForm />
        </ModalMessageForm>
      </Modal>
      {!loading && (
        <>
          <NavBarContainer>
            <div>
              <h3>Texas Steakout</h3>
              <main>
                <Link href='/DashBoard/Painel'>Bookings</Link>
                <Link href='/DashBoard/Settings'>Settings</Link>
                <button onClick={handleUserLoginOut}>Log out</button>
              </main>
            </div>
          </NavBarContainer>

          <BookingContainer>
            <div className='bookingDateContainer'>
              <input
                type='date'
                onChange={(e) => hadleFormDateChange(e.target.value)}
                defaultValue={today}
              />
            </div>
            <button onClick={() => setIsOpen(true)}>ADD Booking</button>
          </BookingContainer>

          <ColorsContainer>
            <div>
              <SpanColor spanColor='var(--red)'></SpanColor>
              <small>Not Confirmed</small>
            </div>
            <div>
              <SpanColor spanColor='var(--green)'></SpanColor>
              <small>Confirmed</small>
            </div>
            <div>
              <SpanColor spanColor='var(--blue-10)'></SpanColor>
              <small>Request</small>
            </div>
          </ColorsContainer>

          <BookingDashboard />
        </>
      )}
    </DashboardContainer>
  );
}
