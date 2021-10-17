import React, { useState, useEffect } from "react";

//styles
import {
  Container,
  // FormAdmContainer,
  BookingContainer,
  TableContainer,
} from "./styles";

//services
import { api } from "../../services/api";

interface DateBookingProps {
  id: number;
  date: string;
  timeResevations: [
    {
      id: number;
      time: string;
      resevations: [
        {
          id: number;
          amountOfPeople: string;
          name: string;
          confirmed: boolean;
          mobileNumber: string;
          email: string;
          request: string;
        }
      ];
    }
  ];
}

export function BookingDashboard() {
  const [admForm, setAdmForm] = useState({
    amountOfPeople: 2,
    quantityOfTables: 4,
  });
  const [dateBooking, setDateBooking] = useState<DateBookingProps>();
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(() => {
    var data = new Date(),
      dia = data.getDate().toString(),
      day = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      month = mes.length == 1 ? "0" + mes : mes,
      year = data.getFullYear();

    return year + "-" + month + "-" + day;
  });


  useEffect(() => {
    async function getBookings() {
      await api
        .get(`/Booking/${date}`)
        .then((res) => {
          setLoading(false);
          setDateBooking(res.data);
        })
        .catch((err) => {
          console.log("err");
          throw err;
        });
    }
    getBookings();
  }, [date]);

  return (
    <Container>
      {/* <FormAdmContainer onSubmit={(e) => handleAdmFormSubmit(e)}>
        Quantity of people on the table:
        <label htmlFor=''>
          <input type='number' min='2' max='10' required />
        </label>
        Quantity of tables
        <label htmlFor=''>
          <input type='number' required />
        </label>
        <button type='submit'>Save</button>
      </FormAdmContainer> */}
      <BookingContainer>
        <div className='bookingDateContainer'>
          <input type='date' onChange={(e) => setDate(e.target.value)} />
        </div>
      </BookingContainer>
      <TableContainer>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>5pm to 6:30pm</th>
              <th>5:30pm to 7pm</th>
              <th>6pm to 7:30pm</th>
              <th>6:30pm to 8pm</th>
              <th>7pm to 8:30pm</th>
              <th>7:30pm to 9pm</th>
              <th>8pm to 9:30pm</th>
              <th>8:30pm to 10pm</th>
              <th>9pm to 10:30pm</th>
              <th>9:30pm to 11pm</th>
              <th>10pm to 11:30pm</th>
            </tr>
          </thead>
          <tbody>
            {loading === true ? (
              <tr>
                <td>oi</td>
              </tr>
            ) : (
              dateBooking === undefined ? 'sim' : 
              dateBooking.timeResevations.map(x => {
                return(
                <tr>
                  <td>{x.time ==="6pm to 7:30pm" 
                  ?
                  x.resevations?.map(x => x.name)
                  : 'nao'
                  }</td>
                </tr>
                )
              })
            )}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
}
