import React, { useState, useEffect } from "react";


//components
import { BookingDisplay } from "./bookingDisplay/";

//styles
import {
  Container,
  DashboardContainer,
} from "./styles";

//hooks
import { useBooking } from "../../hooks";

export function BookingDashboard() {
  const {
    booking4to530,
    booking430to6,
    booking5to630,
    booking530to7,
    booking6to730,
    booking630to8,
    booking7to830,
    booking730to9,
    booking8to930,
    booking830to10,
    booking9to1030,
    booking930to11,
    booking10to1130,
  } = useBooking();


  return (
    <Container>
      <DashboardContainer>
        <div className='dashboardTimeContainer'>
          <small>4pm to 5:30pm</small>
          <small>4:30pm to 5pm</small>
          <small>5pm to 6:30pm</small>
          <small>5:30pm to 7pm</small>
          <small>6pm to 7:30pm</small>
          <small>6:30pm to 8pm</small>
          <small>7pm to 8:30pm</small>
          <small>7:30pm to 9pm</small>
          <small>8pm to 9:30pm</small>
          <small>8:30pm to 10pm</small>
          <small>9pm to 10:30pm</small>
          <small>9:30pm to 11pm</small>
          <small>10pm to 11:30pm</small>
        </div>
        <div className='dashboardDiaplyContainer'>
          <BookingDisplay arrayBookings={booking4to530} />
          <BookingDisplay arrayBookings={booking430to6} />
          <BookingDisplay arrayBookings={booking5to630} />
          <BookingDisplay arrayBookings={booking530to7} />
          <BookingDisplay arrayBookings={booking6to730} />
          <BookingDisplay arrayBookings={booking630to8} />
          <BookingDisplay arrayBookings={booking7to830} />
          <BookingDisplay arrayBookings={booking730to9} />
          <BookingDisplay arrayBookings={booking8to930} />
          <BookingDisplay arrayBookings={booking830to10} />
          <BookingDisplay arrayBookings={booking9to1030} />
          <BookingDisplay arrayBookings={booking930to11} />
          <BookingDisplay arrayBookings={booking10to1130} />
        </div>
      </DashboardContainer>
    </Container>
  );
}
