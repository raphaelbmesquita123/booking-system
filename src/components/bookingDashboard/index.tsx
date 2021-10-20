import React from "react";

//components
import { BookingDisplay } from "./bookingDisplay/";

//styles
import {
  Container,
  // FormAdmContainer,
  BookingContainer,
  DashboardContainer,
} from "./styles";

//services
import { api } from "../../services/api";
import { useBooking } from "../../hooks";

// interface ResevationsProps {
//   id: number;
//   amountOfPeople: string;
//   name: string;
//   confirmed: boolean;
//   mobileNumber: string;
//   email: string;
//   hasRequest: boolean;
//   request?: string;
// }

// interface DateBookingProps {
//   id: number;
//   date: string;
//   timeResevations: [
//     {
//       id: number;
//       time: string;
//       resevations: ResevationsProps[];
//     }
//   ];
// }

export function BookingDashboard() {
  const {
    today,
    handleDateChange,
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

  // const [dateBooking, setDateBooking] = useState<DateBookingProps>();
  // const [loading, setLoading] = useState(true);
  // const [date, setDate] = useState(() => {
  //   var data = new Date(),
  //     dia = data.getDate().toString(),
  //     day = dia.length == 1 ? "0" + dia : dia,
  //     mes = (data.getMonth() + 1).toString(),
  //     month = mes.length == 1 ? "0" + mes : mes,
  //     year = data.getFullYear();

  //   return year + "-" + month + "-" + day;
  // });

  // useEffect(() => {
  //   async function getBookings() {
  //     await api
  //       .get(`/Booking/${date}`)
  //       .then((res: any) => {
  //         setDateBooking(res.data);
  //         setLoading(false);
  //       })
  //       .catch((err: any) => {
  //         console.log("err");
  //         throw err;
  //       });
  //   }
  //   getBookings();
  // }, [date]);

  // const booking5to630 = dateBooking?.timeResevations?.find((timeResevation) => {
  //   return timeResevation.time === "5pm to 6:30pm";
  // });
  // const booking530to7 = dateBooking?.timeResevations?.find((timeResevation) => {
  //   return timeResevation.time === "5:30pm to 7pm";
  // });
  // const booking6to730 = dateBooking?.timeResevations?.find((timeResevation) => {
  //   return timeResevation.time === "6pm to 7:30pm";
  // });
  // const booking630to8 = dateBooking?.timeResevations?.find((timeResevation) => {
  //   return timeResevation.time === "6:30pm to 8pm";
  // });
  // const booking7to830 = dateBooking?.timeResevations?.find((timeResevation) => {
  //   return timeResevation.time === "7pm to 8:30pm";
  // });
  // const booking730to9 = dateBooking?.timeResevations?.find((timeResevation) => {
  //   return timeResevation.time === "7:30pm to 9pm";
  // });
  // const booking8to930 = dateBooking?.timeResevations?.find((timeResevation) => {
  //   return timeResevation.time === "8pm to 9:30pm";
  // });
  // const booking830to10 = dateBooking?.timeResevations?.find(
  //   (timeResevation) => {
  //     return timeResevation.time === "8:30pm to 10pm";
  //   }
  // );
  // const booking9to1030 = dateBooking?.timeResevations?.find(
  //   (timeResevation) => {
  //     return timeResevation.time === "9pm to 10:30pm";
  //   }
  // );
  // const booking930to11 = dateBooking?.timeResevations?.find(
  //   (timeResevation) => {
  //     return timeResevation.time === "9:30pm to 11pm";
  //   }
  // );
  // const booking10to1130 = dateBooking?.timeResevations?.find(
  //   (timeResevation) => {
  //     return timeResevation.time === "10pm to 11:30pm";
  //   }
  // );

  function hadleFormDateChange(date: string) {
    handleDateChange(date);
  }
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
      {/* <BookingContainer>
        <div className='bookingDateContainer'>
          <input type='date' onChange={(e) => setDate(e.target.value)} defaultValue={date}/>
        </div>
      </BookingContainer> */}
      <BookingContainer>
        <div className='bookingDateContainer'>
          <input
            type='date'
            onChange={(e) => hadleFormDateChange(e.target.value)}
            defaultValue={today}
          />
        </div>
      </BookingContainer>
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
