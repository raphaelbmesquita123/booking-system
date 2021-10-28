import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { toast } from "react-toastify";

//styles
import { Container, FormContainer } from "./styles";

//services
import { FormOptionsTime } from "./formOptionsTime";

//hooks
import { useBooking } from "../../hooks";
import { apiStrapi } from "../../services/api";
import Router from "next/router";

export function BookingForm() {
  const [formPostion, setFormPosition] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const { today, handleDateChange } = useBooking();

  const [formDate, setFormDate] = useState(today);
  const [formAmountOfPeople, setFormAmountOfPeople] = useState('2');
  const [formTimeAvailable, setFormTimeAvailable] = useState("4pm to 5:30pm");
  const [formName, setFormName] = useState("");
  const [formContactNumber, setFormContactNumber] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRequest, setFormRequest] = useState("");
  const [ buttonDisabled, setButtonDisabled] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    await apiStrapi.post('/bookings', {
      name: formName,
      amount_of_people: Number(formAmountOfPeople),
      time: formTimeAvailable,
      contact_number: formContactNumber,
      email: formEmail,
      has_request: formRequest.length > 5 ? true : false,
      request: formRequest,
      date: formDate,
    }).then(() => {
      toast.info('You table was booked successfully.');
      setButtonDisabled(true)
      // setTimeout(() => {
      //   Router.push('https://texassteakout.ie/')
      // }, 4000);
    }).catch((error) => {
      setButtonDisabled(true)
      toast.info('Something went wrong, please call us on 061-414 440.');
      setTimeout(() => {
        window.location.reload();
      }, 4000);
      console.log(error)
    })
  }

  function handleFormUp() {
    if (formPostion === 0) {
      return;
    } else {
      setFormPosition(formPostion + 600);
    }
  }

  function handleFormDown() {
    if (agreed === false || formPostion === -3000) {
      return;
    }
    if (
      formPostion === -2400 &&
      (formName.length === 0 ||
        formContactNumber.length === 0 ||
        formEmail.length === 0)
    ) {
      
      toast.info("We need your personal details to book a table");
      return;
    } else {
      setFormPosition(formPostion + -600);
    }
  }
  function handleFormDateChange(date: string) {
    handleDateChange(date);
    setFormDate(date);
    handleFormDown();
  }

  function handleFormAmountOfPeopleChange(qnt: string) {
    setFormAmountOfPeople(qnt);
    handleFormDown();
  }

  function handleFormTimeChange(time: string) {
    console.log(time);
    setFormTimeAvailable(time);
    handleFormDown();
  }


  return (
    <Container>
      <a href='https://texassteakout.ie/' target='_blank' rel='noreferrer'>
        <img src='/logo.png' alt='' />
      </a>
      <FormContainer top={`${formPostion}px`}>
        <div className='bookingDetails'>
          <h2>Booking Details</h2>
          <ul>
            <li>
              We currently DO NOT require a credit card number to secure your
              booking. However we do ask that if you do need to cancel a booking
              that you do so as early as possible.
            </li>
            <li>
              We currently are not in a position to accommodate single parties
              of more than 7 people.
            </li>
            <li>
              For parties between 7 and 14 people you may book 2 separate tables
              and we will try to have them seated as close as possible. [14
              People is the maximum number per party in any case ]
            </li>
            <li>
              Management reserve the right to refuse admission [ Even with a
              confirmed booking ] The Texas Steakout dress code is [ Smart
              Casual ]
            </li>
          </ul>
          <label htmlFor=''>
            <input
              type='checkbox'
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I Agree
          </label>
        </div>
        <div className='formDate'>
          <h2>Date:</h2>
          <label htmlFor=''>
            <input
              type='date'
              onChange={(e) => handleFormDateChange(e.target.value)}
              defaultValue={today}
            />
          </label>
        </div>

        <div className='formQuantityOfPeople'>
          <h2>Quantity of People</h2>
          <label htmlFor=''>
            <select
              onChange={(e) => handleFormAmountOfPeopleChange(e.target.value)}
            >
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
        </div>
        <div className='formTime'>
          <h2>Time Available</h2>
          <label htmlFor=''>
            <FormOptionsTime
              getValue={(e) => handleFormTimeChange(e)}
              amountOfPeople={formAmountOfPeople}
            />
            <div className='formTimeWaitList'>
              <span>
                If your chosen time is not available you can be added to the
                waiting list and If there is a cancelation you will be notified
                by email an hour before the chosen time
              </span>
            </div>
          </label>
        </div>

        <div className='formContacts'>
          <h2>Personal Informations</h2>
          <small>
            Your personal information will not be shared with others
          </small>
          <label htmlFor=''>
            <input
              type='text'
              placeholder='Name'
              required
              onChange={(e) => setFormName(e.target.value)}
            />
          </label>
          <label htmlFor=''>
            <input
              type='tel'
              placeholder='Contact Number'
              required
              onChange={(e) => setFormContactNumber(e.target.value)}
            />
          </label>
          <label htmlFor=''>
            <input
              type='email'
              placeholder='Email'
              required
              onChange={(e) => setFormEmail(e.target.value)}
            />
          </label>
        </div>

        <div className='formRequests'>
          <h2> Request </h2>
          <small>
            Do you have any special requests? Tell us and we will see what we
            can do!
          </small>
          <label htmlFor=''>
            <textarea
              onChange={(e) => setFormRequest(e.target.value)}
            ></textarea>
          </label>
          <button className='bookingButton' onClick={(e) => handleSubmit(e)} disabled={buttonDisabled}>
            Book Now
          </button>
        </div>
      </FormContainer>
      <div className='formButtons'>
        <FaAngleUp onClick={() => handleFormUp()} />
        <FaAngleDown onClick={() => handleFormDown()} />
      </div>
    </Container>
  );
}
