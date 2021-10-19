import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";

//styles
import { SelectContainer } from "./styles";

//hooks
import { useBooking } from "../../../hooks";

interface FormOptionsTimeProps {
  getValue: (value: string) => void;
  amountOfPeople: string;
}

interface ResevationsProps {
  id: number;
  confirmed: boolean;
  email: string;
  amountOfPeople: number;
  mobileNumber: string;
  name: string;
  request?: string;
}

interface BookingTimeProps {
  id: number;
  resevations: ResevationsProps[];
  time: string;
}

export function FormOptionsTime({
  getValue,
  amountOfPeople,
}: FormOptionsTimeProps) {
  const [quatityOftables, setQuantityOfTables] = useState<number>(8);
  const [table22, setTable22] = useState(0);

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

  function thereIsStillTablesAvailable(
    bookingTime: BookingTimeProps,
    // quantityOfPeople: number,
    // quatityOftables: number
  ) {

    if (bookingTime) {
      const quantityOfBookings = bookingTime.resevations.filter((x) => {
        return x.amountOfPeople === Number(amountOfPeople);
      });
      return (quatityOftables - quantityOfBookings.length);
    } else {
      return quatityOftables;
    }
  }

  useEffect(() => {
    async function getTables() {
      await api
        .get(`/Tables/${Number(amountOfPeople)}`)
        .then((res: any) => {
          setQuantityOfTables(res.data.quantityOfTables);
        })
        .catch((err: any) => {
          throw err;
        });
    }
    getTables();
  }, [amountOfPeople]);

  return (
    <SelectContainer>
      <select onChange={(e) => getValue(e.target.value)}>
        {
          thereIsStillTablesAvailable(booking4to530) > 0 ? 
          <option label={`4pm to 5:30pm - ${thereIsStillTablesAvailable(booking4to530)} tables left`}>4pm to 5:30pm</option>
          :
          <option label='4pm to 5:30pm - Add to waitlist'>4pm to 5:30pm</option>
        } 
        {
          thereIsStillTablesAvailable(booking430to6) > 0 ? 
          <option label={`4:30pm to 6pm - ${thereIsStillTablesAvailable(booking430to6)} tables left`}>4:30pm to 6pm</option>
          :
          <option label='4:30pm to 6pm - Add to waitlist'>4:30pm to 6pm</option>
        } 
        {
          thereIsStillTablesAvailable(booking5to630) > 0 ? 
          <option label={`5pm to 6:30pm - ${thereIsStillTablesAvailable(booking5to630)} tables left`}>5pm to 6:30pm</option>
          :
          <option label='5pm to 6:30pm - Add to waitlist'>5pm to 6:30pm</option>
        }

        {
          thereIsStillTablesAvailable(booking530to7) > 0 ? 
          <option label={`5:30pm to 7pm - ${thereIsStillTablesAvailable(booking530to7)} tables left`}>5:30pm to 7pm</option>
          :
          <option label='5:30pm to 7pm - Add to waitlist'>5:30pm to 7pm</option>
        }
        {
          thereIsStillTablesAvailable(booking6to730) > 0 ? 
          <option label={`6pm to 7:30pm - ${thereIsStillTablesAvailable(booking6to730)} tables left`}>6pm to 7:30pm</option>
          :
          <option label='6pm to 7:30pm - Add to waitlist'>6pm to 7:30pm</option>
        }  
        {
          thereIsStillTablesAvailable(booking630to8) > 0 ? 
          <option label={`6:30pm to 8pm - ${thereIsStillTablesAvailable(booking630to8)} tables left`}>6:30pm to 8pm</option>
          :
          <option label='6:30pm to 8pm - Add to waitlist'>6:30pm to 8pm</option>
        }  

        {
          thereIsStillTablesAvailable(booking7to830) > 0 ? 
          <option label={`7pm to 8:30pm - ${thereIsStillTablesAvailable(booking7to830)} tables left`}>7pm to 8:30pm</option>
          :
          <option label='7pm to 8:30pm - Add to waitlist'>7pm to 8:30pm</option>
        }  
        
        {
          thereIsStillTablesAvailable(booking730to9) > 0 ? 
          <option label={`7:30pm to 9pm - ${thereIsStillTablesAvailable(booking730to9)} tables left`}>7:30pm to 9pm</option>
          :
          <option label='7:30pm to 9pm - Add to waitlist'>7:30pm to 9pm</option>
        }

        {
          thereIsStillTablesAvailable(booking8to930) > 0 ? 
          <option label={`8pm to 9:30pm - ${thereIsStillTablesAvailable(booking8to930)} tables left`}>8pm to 9:30pm</option>
          :
          <option label='8pm to 9:30pm - Add to waitlist'>8pm to 9:30pm</option>
        } 
        {
          thereIsStillTablesAvailable(booking830to10) > 0 ? 
          <option label={`8:30pm to 10pm - ${thereIsStillTablesAvailable(booking830to10)} tables left`}>8:30pm to 10pm</option>
          :
          <option label='8:30pm to 10pm - Add to waitlist'>8:30pm to 10pm</option>
        } 
        {
          thereIsStillTablesAvailable(booking9to1030) > 0 ? 
          <option label={`9pm to 10:30pm - ${thereIsStillTablesAvailable(booking9to1030)} tables left`}>9pm to 10:30pm</option>
          :
          <option label='9pm to 10:30pm - Add to waitlist'>9pm to 10:30pm</option>
        } 
        {
          thereIsStillTablesAvailable(booking930to11) > 0 ? 
          <option label={`9:30pm to 11pm - ${thereIsStillTablesAvailable(booking930to11)} tables left`}>9:30pm to 11pm</option>
          :
          <option label='9:30pm to 11pm - Add to waitlist'>9:30pm to 11pm</option>
        } 
        {
          thereIsStillTablesAvailable(booking10to1130) > 0 ? 
          <option label={`10pm to 11:30pm - ${thereIsStillTablesAvailable(booking10to1130)} tables left`}>10pm to 11:30pm</option>
          :
          <option label='10pm to 11:30pm - Add to waitlist'>10pm to 11:30pm</option>
        } 
        {/* <option label='4:30pm to pm'>4:30pm to pm</option>
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
        <option label='10pm to 11:30pm'>10pm to 11:30pm</option> */}
      </select>
    </SelectContainer>
  );
}
