import { NextApiRequest, NextApiResponse } from "next";
import { data } from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, body } = req.query;

  if (req.method === "GET") {
    const bookingData = data.bookings.find((booking) => {
      return booking.date === id;
    });
    return res.status(200).json(bookingData);
  }
  
  if (req.method === "POST") {
    // const bookingData = data.bookings.find((booking) => {
    //   return booking.date === id;
    // });
    // return res.status(200).json(bookingData);
    console.log(body)
    return res.status(200).json(body)
  }
}
