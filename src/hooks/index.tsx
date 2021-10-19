import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";

//services
import { api } from "../services/api";

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

interface DateBookingProps {
  id: number;
  date: string;
  timeResevations: [
    {
      id: number;
      time: string;
      resevations: ResevationsProps[];
    }
  ];
}

type ProductsProps = {
  today: string;
  handleDateChange: (date: string) => void;
  booking4to530?: any;
  booking430to6?: any;
  booking5to630?: any;
  booking530to7?: any;
  booking6to730?: any;
  booking630to8?: any;
  booking7to830?: any;
  booking730to9?: any;
  booking8to930?: any;
  booking830to10?: any;
  booking9to1030?: any;
  booking930to11?: any;
  booking10to1130?: any;
};

const BookingContext = createContext<ProductsProps>({} as ProductsProps);

type bookingContextProviderProps = {
  children: ReactNode;
};

export function BookingContextProvider({
  children,
}: bookingContextProviderProps) {
  const [today] = useState(() => {
    var data = new Date(),
      dia = data.getDate().toString(),
      day = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      month = mes.length == 1 ? "0" + mes : mes,
      year = data.getFullYear();

    // return year + "-" + month + "-" + day;
    return '2021-10-17'
  });
  const [bookingsByDate, setBookingsByDate] = useState<DateBookingProps>();
  const [date, setDate] = useState<string>(today);

  function handleDateChange(date: string) {
    setDate(date);
  }
  useEffect(() => {
    async function getBookings() {
      await api
        .get(`/Booking/${date}`)
        .then((res: any) => {
          setBookingsByDate(res.data);
        })
        .catch((err: any) => {
          console.log("err");
          throw err;
        });
    }
    getBookings();
  }, [date]);

  const booking4to530 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "4pm to 5:30pm";
    }
  );

  const booking430to6 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "4:30pm to 6pm";
    }
  );

  const booking5to630 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "5pm to 6:30pm";
    }
  );
  const booking530to7 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "5:30pm to 7pm";
    }
  );
  const booking6to730 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "6pm to 7:30pm";
    }
  );
  const booking630to8 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "6:30pm to 8pm";
    }
  );
  const booking7to830 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "7pm to 8:30pm";
    }
  );
  const booking730to9 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "7:30pm to 9pm";
    }
  );
  const booking8to930 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "8pm to 9:30pm";
    }
  );
  const booking830to10 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "8:30pm to 10pm";
    }
  );
  const booking9to1030 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "9pm to 10:30pm";
    }
  );
  const booking930to11 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "9:30pm to 11pm";
    }
  );
  const booking10to1130 = bookingsByDate?.timeResevations?.find(
    (timeResevation) => {
      return timeResevation.time === "10pm to 11:30pm";
    }
  );

  return (
    <BookingContext.Provider
      value={{
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
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
