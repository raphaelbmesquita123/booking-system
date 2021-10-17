import React from "react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";

//styles
import { ButtonContainer, FormContainer } from "./styles";

//servoces
import { api } from "../../services/api";

export function BookingButton() {
  const [isFormBookingOpen, setIfDormBookingOpen] = useState(false);
  const [newBooking, setNewBooking] = useState({
    date: "",
    mobileNumber: "",
    name: "",
    confrimed: false,
    time: "",
    amountOfPeople: 2,
    email: "",
    request: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("oi");
  }

  // useEffect(() => {
  //   async function getBooking() {
  //     const { data } = await api.get('/Booking')
  //     console.log(data)
  //   }
  //   getBooking()
  // }, [])

  return (
    <div>
      <ButtonContainer onClick={() => setIfDormBookingOpen(!isFormBookingOpen)}>
        Book Now
      </ButtonContainer>
      <FormContainer
        display={isFormBookingOpen ? "flex" : "none"}
        action=''
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor=''>
          People
          <select name='' id='' onChange={(e) => console.log(e.target.value)}>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </label>
        <label htmlFor=''>
          Date:
          <input type='date' onChange={(e) => console.log(e.target.value)} />
        </label>
        <label htmlFor=''>
          Time
          <select name='' id='' onChange={(e) => console.log(e.target.value)}>
            <option label='4pm to 5:30pm'>4pm to 5:30pm</option>
            <option label='4:30pm to 6pm'>4:30pm to 6pm</option>
            <option label='5pm to 6:30pm'>5pm to 6:30pm</option>
            <option label='5:30pm to 7pm'>5:30pm to 7pm</option>
            <option label='6pm to 7:30pm'>6pm to 7:30pm</option>
            <option label='6:30pm to 8pm'>6:30pm to 8pm</option>
            <option label='7pm to 8:30pm'>7pm to 8:30pm</option>
            <option label='7:30pm to 9pm'>7:30pm to 9pm</option>
            <option label='8pm to 9:30pm'>8pm to 9:30pm</option>
            <option label='8:30pm to 10pm'>8:30pm to 10pm</option>
            <option label='9pm to 10:30pm'>9pm to 10:30pm</option>
            <option label='9:30pm to 11pm'>9:30pm to 11pm</option>
            <option label='10pm to 11:30pm'>10pm to 11:30pm</option>
          </select>
        </label>
        <label htmlFor=''>
          Name:
          <input type='text' />
        </label>
        <label htmlFor=''>
          Mobile:
          <input type='tel' />
        </label>
        <label htmlFor=''>
          Email:
          <input type='email' />
        </label>
        <label htmlFor=''>
          Requests:
          <textarea name='' id=''></textarea>
        </label>
        <button type='submit'>Send</button>
      </FormContainer>
    </div>
  );
}
