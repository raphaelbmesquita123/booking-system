import { NextApiRequest, NextApiResponse } from "next";
import { data } from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pid } = req.query;

  if (req.method === "GET") {
    return res.status(200).json(pid);
  }
}
