import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";

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

type ProductsProps = {
  today: string;
  handleDateChange: (date: string) => void;
  handleUserLoginIn: (user: object) => void;
  handleUserLoginOut: () => void;
  user: any;
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

interface UserProps {
  jwt?: string;
  user?: object;
}
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

    return year + "-" + month + "-" + day;
  });

  const [cookie, setCookie, removeCookie] = useCookies([
    "dash-board-texassteakout",
  ]);
  const [bookingsByDate, setBookingsByDate] = useState<any>();

  const [date, setDate] = useState<string>(today);
  const [user, setUser] = useState(() => {
    if (cookie) {
      return cookie["dash-board-texassteakout"];
    } else {
      return null;
    }
  });

  function handleUserLoginIn(user: object) {
    setUser(user);
    setCookie("dash-board-texassteakout", JSON.stringify(user), {
      path: "/DashBoard",
      maxAge: 86400, //24h
      sameSite: true,
    });
  }

  function handleUserLoginOut() {
    removeCookie("dash-board-texassteakout");
    setUser(null);
  }

  function handleDateChange(date: string) {
    setDate(date);
  }

  useEffect(() => {
    async function getBookings() {
      await api
        .get(`/bookings`)
        .then((res: any) => {
          const bookingsForToday = res.data.filter((x: any) => {
            return x.date === date;
          });
          setBookingsByDate(bookingsForToday);
        })
        .catch((err: any) => {
          throw err;
        });
    }
    getBookings();
  }, [date]);

  const booking4to530 = bookingsByDate?.filter((x: any) => {
    return x.time === "4pm to 5:30pm";
  });

  const booking430to6 = bookingsByDate?.filter((x: any) => {
    return x.time === "4:30pm to 6pm";
  });

  const booking5to630 = bookingsByDate?.filter((x: any) => {
    return x.time === "5pm to 6:30pm";
  });
  const booking530to7 = bookingsByDate?.filter((x: any) => {
    return x.time === "5:30pm to 7pm";
  });
  const booking6to730 = bookingsByDate?.filter((x: any) => {
    return x.time === "6pm to 7:30pm";
  });
  const booking630to8 = bookingsByDate?.filter((x: any) => {
    return x.time === "6:30pm to 8pm";
  });
  const booking7to830 = bookingsByDate?.filter((x: any) => {
    return x.time === "7pm to 8:30pm";
  });
  const booking730to9 = bookingsByDate?.filter((x: any) => {
    return x.time === "7:30pm to 9pm";
  });
  const booking8to930 = bookingsByDate?.filter((x: any) => {
    return x.time === "8pm to 9:30pm";
  });
  const booking830to10 = bookingsByDate?.filter((x: any) => {
    return x.time === "8:30pm to 10pm";
  });
  const booking9to1030 = bookingsByDate?.filter((x: any) => {
    return x.time === "9pm to 10:30pm";
  });
  const booking930to11 = bookingsByDate?.filter((x: any) => {
    return x.time === "9:30pm to 11pm";
  });
  const booking10to1130 = bookingsByDate?.filter((x: any) => {
    return x.time === "10pm to 11:30pm";
  });

  return (
    <BookingContext.Provider
      value={{
        today,
        handleDateChange,
        handleUserLoginIn,
        handleUserLoginOut,
        user,
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
