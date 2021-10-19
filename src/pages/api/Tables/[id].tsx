import { NextApiRequest, NextApiResponse } from "next";
import { data } from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, body } = req.query;
  if (req.method === "GET") {
    const tablesData = data.tables.find((table) => {
      return table.amountOfPeople === Number(id)
    });
    return res.status(200).json(tablesData);
  }
}
